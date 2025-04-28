import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meus-dados',
  templateUrl: './meus-dados.page.html',
  styleUrls: ['./meus-dados.page.scss'],
})
export class MeusDadosPage implements OnInit {

  usuario: Usuario;
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private toastController: ToastController, private navController: NavController,     private router: Router
    ) { 
    this.usuario = new Usuario();
    this.formGroup = this.formBuilder.group({
      'nome': [this.usuario.nome, Validators.compose([Validators.required])],    
      'email': [this.usuario.email, Validators.compose([Validators.required])],      
      'senha': [this.usuario.senha, Validators.compose([Validators.required])],      
      'cpf': [this.usuario.cpf, Validators.compose([Validators.required])],      
      'preferencia': [this.usuario.preferencia, Validators.compose([Validators.required])],      
      'dataNasc': [this.usuario.dataNasc, Validators.compose([Validators.required])],      
      'descricao': [this.usuario.descricao, Validators.compose([Validators.required])],      
      'usuarioInsta': [this.usuario.usuarioInsta, Validators.compose([Validators.required])],      

    })
  }

  ngOnInit() {
    debugger
    this.usuario = this.usuarioService.recuperarAutenticacao();
    console.log("confira: ", this.usuario);
    this.formGroup.get('nome')?.setValue(this.usuario.nome);
    this.formGroup.get('email')?.setValue(this.usuario.email);
    this.formGroup.get('senha')?.setValue(this.usuario.senha);
    this.formGroup.get('cpf')?.setValue(this.usuario.cpf);
    this.formGroup.get('preferencia')?.setValue(this.usuario.preferencia);
    this.formGroup.get('dataNasc')?.setValue(this.usuario.dataNasc);
    this.formGroup.get('descricao')?.setValue(this.usuario.descricao);
    this.formGroup.get('usuarioInsta')?.setValue(this.usuario.usuarioInsta);
    console.log("confira: ", this.usuario.nome);
  }


  salvar(){    
    debugger
    this.usuario.nome = this.formGroup.value.nome;
    this.usuario.senha = this.formGroup.value.senha;
    this.usuario.preferencia = this.formGroup.value.preferencia;
    this.usuario.descricao = this.formGroup.value.descricao;
    this.usuario.usuarioInsta = this.formGroup.value.usuarioInsta;

    this.usuarioService.salvar(this.usuario)
    .then((json)=>{
      this.usuario = <Usuario>(json);
      if (this.usuario) {
        this.usuarioService.registrarAutenticacao(this.usuario);
        this.exibirMensagem('Registro salvo com sucesso!!!')
        this.navController.navigateBack('/menu')
      }    
    })
    .catch((erro=>{
      this.exibirMensagem('Erro ao salvar o registro! Erro: ' + erro['mensage']);
    }));

        
  }

  async exibirMensagem(texto: string){
    const toast = await this.toastController.create({
      message: texto,
      duration: 1500
    });
    toast.present()
  }

}
