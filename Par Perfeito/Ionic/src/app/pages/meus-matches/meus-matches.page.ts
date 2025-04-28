import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { Aptidao } from 'src/app/model/aptidao';
import { Usuario } from 'src/app/model/usuario';
import { AptidaoService } from 'src/app/services/aptidao.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-meus-matches',
  templateUrl: './meus-matches.page.html',
  styleUrls: ['./meus-matches.page.scss'],
})
export class MeusMatchesPage implements OnInit {
  aptidoes: any[] = []; // Inicializando como array vazio
  usuario: Usuario;
  quantidadeMatchesEscolhidos: number = 0;

  constructor(
    private toastController: ToastController,
    private navController: NavController,
    private alertController: AlertController,
    private aptidaoService: AptidaoService,
    private loadingController: LoadingController,
    private usuarioService: UsuarioService
  ) { 
    this.usuario = usuarioService.recuperarAutenticacao();
    console.log('Usuário recuperado:', this.usuario); // Verificando se o usuário está sendo recuperado corretamente
  }

  ngOnInit() {
    console.log('ngOnInit chamado'); // Verificando se o ngOnInit está sendo executado
  }

  async ionViewWillEnter() {
    // Chama a função para o usuário escolher a quantidade de matches
    await this.escolherQuantidadeMatches();
  }
  

  // Função para mostrar o alerta com o input para escolher a quantidade de matches
  async escolherQuantidadeMatches() {
    const alert = await this.alertController.create({
      header: 'Escolha seu pacote de matches',
      inputs: [
        {
          name: 'pacote',
          type: 'radio',
          label: 'Pacote Eros',
          value: 3,
          checked: true
        },
        {
          name: 'pacote',
          type: 'radio',
          label: 'Pacote Afrodite',
          value: 5
        },
        {
          name: 'pacote',
          type: 'radio',
          label: 'Pacote Cupido',
          value: 8
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.navController.navigateRoot('/menu');
          }
        },
        {
          text: 'Confirmar',
          handler: async (quantidade) => {
            this.quantidadeMatchesEscolhidos = quantidade;
            console.log('Pacote selecionado com quantidade:', this.quantidadeMatchesEscolhidos);
            
            await this.gerarMeusMatches(); 
            this.carregarLista();          
          }
        }
      ]
    });
  
    await alert.present();
  }
  
  

  // Gera matches no backend
  async gerarMeusMatches() {
    console.log('Gerando matches...');
    try {
      const usuarios = await this.usuarioService.listar();
      const usuariosFiltrados = usuarios.filter(u => u.id !== this.usuario.id);

      for (const outroUsuario of usuariosFiltrados) {
        const aptidaoAux = new Aptidao(this.usuario.id, outroUsuario.id, 0);
        await this.aptidaoService.gerarMatches(aptidaoAux); // Aguarda a requisição
      }
    } catch (error) {
      console.error('Erro ao gerar matches:', error);
    }
  }

  // Carrega a lista de matches com detalhes dos usuários
  async carregarLista() {
    if (this.quantidadeMatchesEscolhidos <= 0) {
      this.toastController.create({
        message: 'Por favor, selecione um número válido de matches.',
        duration: 10,
      }).then(toast => toast.present());
      return;
    }

    this.exibirLoaderComTimeout();
    try {
      const aptidoes = await this.aptidaoService.listarMatches(this.usuario.id);
  
      // Filtra apenas aptidões com pontuação maior que 0
      const aptidoesValidas = aptidoes.filter(aptidao => aptidao.pontuacao > 0);
  
      // Ordena as aptidões por pontuação decrescente
      aptidoesValidas.sort((a, b) => b.pontuacao - a.pontuacao);
  
      // Limita a quantidade de matches de acordo com a escolha do usuário
      this.aptidoes = aptidoesValidas.slice(0, this.quantidadeMatchesEscolhidos);
  
      console.log('Aptidoes a exibir:', this.aptidoes);

      // Associa os dados dos usuários aos matches
      this.aptidoes = await Promise.all(
        this.aptidoes.map(async (aptidao) => {
          try {
            const outroUsuario = await this.usuarioService.buscarPorId(aptidao.codPessoa2);
            return { ...aptidao, outroUsuario };
          } catch (error) {
            console.error(`Erro ao buscar usuário com ID ${aptidao.codPessoa2}:`, error);
            return { 
              ...aptidao, 
              outroUsuario: { nome: 'Nome não disponível', usuarioInsta: 'Instagram não disponível' }
            };
          }
        })
      );

    } catch (error) {
      console.error('Erro ao carregar lista de matches:', error);
    } finally {
      this.fecharLoader();
    }
  }
  
  exibirLoaderComTimeout() {
    this.loadingController.create({ message: 'Carregando...' }).then(loader => {
      loader.present();
  
      // Fecha o loader após 10 segundos (tempo configurável)
      setTimeout(() => {
        this.fecharLoader();
      }, 10000);
    });
  }
  
  fecharLoader() {
    this.loadingController.dismiss().catch(err => console.error('Erro ao fechar loader:', err));
  }
}
