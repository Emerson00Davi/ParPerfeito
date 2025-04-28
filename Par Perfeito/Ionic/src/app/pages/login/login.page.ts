import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: Usuario;
  formGroup: FormGroup;

  constructor(private toastController: ToastController, private navController: NavController, private formBuilder: FormBuilder, 
    private usuarioService: UsuarioService) { 
      this.usuario = new Usuario();
      this.formGroup = this.formBuilder.group({
        'email': [null, Validators.compose([Validators.required,])],
        'senha': [ null, Validators.compose([Validators.required,])]
    })
  }

  ngOnInit() {
    this.usuarioService.encerrarAutenticacao();
  }

  async autenticar(){
    let email = this.formGroup.value.email;
    let senha = this.formGroup.value.senha;
    this.usuarioService.autenticar(email,senha).then((json) => {
      console.log('Resposta da API:', json);
      this.usuario = <Usuario>(json);
      if(this.usuario.id > 0){
        this.usuario = <Usuario>(json);
        this.usuarioService.registrarAutenticacao(this.usuario);
        this.exibirMensagem("Tudo nos conformes");
        console.log('Resposta da API:', this.usuario.nome);
        this.navController.navigateBack("/menu")
      } else{
        this.exibirMensagem("Usuário e/ou senha inválidos");
      }
    }) 
  }

  async exibirMensagem(texto: string){
    const toast = await this.toastController.create({
      message: texto,
      duration: 1500
    });
    toast.present();
  }

}
