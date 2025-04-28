import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/model/usuario';


interface MenuItem {
  titulo: string;
  rota: string;
  icone: string;
  cor: string;
  acao?: string; // Ação pode ser opcional, como o 'logout'
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  nomeUsuario: string = 'Carregando...';


  menu = [
    { titulo: "Meus Dados", rota: "/meus-dados", icone: "person-circle", cor:"dark" },
    { titulo: "Meus matches", rota: "/meus-matches", icone: "heart", cor: "dark" },
    { titulo: "Gerenciar características", rota: "/caracteristicas", icone: "pricetags", cor: "dark" },
    { titulo: "Sair", rota: "", icone: "log-out", cor: "dark", acao: "logout" }
  ];

  constructor(private alertController: AlertController, private router: Router) { }


  ngOnInit() {
  }

  // Função que será chamada ao clicar no item "Sair"
  async confirmarSair() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: 'Você tem certeza que deseja sair?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Usuário cancelou a saída');
          },
        },
        {
          text: 'Sair',
          handler: () => {
            console.log('Usuário saiu');
            // Aqui você pode redirecionar para o login ou fazer a lógica de logout
            this.router.navigate(['/login']);  // Ajuste conforme necessário
          },
        },
      ],
    });

    await alert.present();
  }

  // Função chamada ao clicar em qualquer item do menu
  handleMenuClick(item: MenuItem) {
    if (item.acao === 'logout') {
      this.confirmarSair();
    } else {
      this.router.navigate([item.rota]);
    }
  }
}
