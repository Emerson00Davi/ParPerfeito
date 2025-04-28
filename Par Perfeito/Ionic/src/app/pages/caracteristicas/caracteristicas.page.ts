import { Component, OnInit } from '@angular/core';
import { Caracteristica } from 'src/app/model/caracteristica';
import { PessoaTemCaracteristica } from 'src/app/model/pessoa-tem-caracteristica';
import { Usuario } from 'src/app/model/usuario';
import { CaracteristicaService } from 'src/app/services/caracteristica.service';
import { PessoaTemCaracteristicaService } from 'src/app/services/pessoa-tem-caracteristica.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.page.html',
  styleUrls: ['./caracteristicas.page.scss'],
})
export class CaracteristicasPage implements OnInit {

  caracteristicas: Caracteristica[] = [];  // Lista de características
  pessoaTemCaracteristicas: PessoaTemCaracteristica[] = [];  // Lista de associações
  selecionadas: any[] = [];
  usuario: Usuario  // Exemplo de ID da pessoa, deve vir do contexto da aplicação

  constructor(private caracteristicaService: CaracteristicaService, private pessoaTemCaracteristicaService: PessoaTemCaracteristicaService, private usuarioService: UsuarioService, private navController: NavController, private toastController: ToastController) {
    this.usuario = usuarioService.recuperarAutenticacao();
   }

  ngOnInit() {
    this.carregarCaracteristicas();
  }

  async carregarCaracteristicas() {
    try {
      // Pega todas as características disponíveis
      this.caracteristicas = await this.caracteristicaService.getCaracteristicas();
  
      // Pega as características associadas ao usuário
      this.pessoaTemCaracteristicas = await this.pessoaTemCaracteristicaService.getPorPessoa(this.usuario.id);
  
      // Obter os IDs das características que o usuário já selecionou
      const idsAssociados = this.pessoaTemCaracteristicas.map(ptc => ptc.idCaracteristica);
  
      // Marcar as características selecionadas no banco como 'selected'
      for (let c of this.caracteristicas) {
        c.selected = idsAssociados.includes(c.id);
      }
  
      console.log('Características carregadas:', this.caracteristicas);
      console.log('Associações existentes:', this.pessoaTemCaracteristicas);
      console.log('Associações carregadas:', this.pessoaTemCaracteristicas);


      // Preencher a caixinha com as características já selecionadas
      this.selecionadas = this.caracteristicas.filter(c => c.selected);
  
    } catch (error) {
      console.error('Erro ao carregar características:', error);
    }
  }
  
  atualizarSelecionadas() {
    // Atualiza a lista das características selecionadas
    this.selecionadas = this.caracteristicas.filter(c => c.selected);
  }
  

  async associarCaracteristicas() {
    const selecionadas = this.caracteristicas.filter(caracteristica => caracteristica.selected);
  
    try {
      for (const caracteristica of selecionadas) {
        const ptc: PessoaTemCaracteristica = {
          idPessoa: this.usuario.id,
          idCaracteristica: caracteristica.id
        };
  
        const resposta = await this.pessoaTemCaracteristicaService.associar(ptc);
        console.log('Associação bem-sucedida:', resposta);
      }
  
      // Exibe um toast de sucesso (opcional)
      const toast = await this.toastController.create({
        message: 'Características associadas com sucesso!',
        duration: 10,
        color: 'medium'
      });
      await toast.present();
  
      // Redireciona para o menu (ajuste a rota conforme necessário)
      this.navController.navigateRoot('/menu'); // Altere '/menu' conforme a rota real da sua aplicação
  
    } catch (erro) {
      console.error('Erro ao associar característica:', erro);
      const toastErro = await this.toastController.create({
        message: 'Erro ao associar características.',
        duration: 10,
        color: 'danger'
      });
      await toastErro.present();
    }
  }
  

  getDescricaoCaracteristica(idCaracteristica: number): string {
    const encontrada = this.caracteristicas.find(c => c.id === idCaracteristica);
    return encontrada ? encontrada.descricao : 'Descrição não encontrada';
  }
  

  submeterSelecionadas() {
    const selecionadas = this.caracteristicas.filter(caracteristica => caracteristica.selected);
    console.log('Características selecionadas:', selecionadas);
  }

}


