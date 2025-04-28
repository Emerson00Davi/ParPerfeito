import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  usuario: Usuario;
  formGroup: FormGroup;
  constructor(private toastController: ToastController, private navController: NavController, private formBuilder: FormBuilder, 
      private usuarioService: UsuarioService){
        this.usuario = new Usuario();
        this.formGroup = this.formBuilder.group({
            'email': [null, Validators.compose([Validators.required,])],
            'senha': [ null, Validators.compose([Validators.required,])],
            'dataNasc': [ null, Validators.compose([Validators.required,])],
            'preferencia': [ null, Validators.compose([Validators.required,])],
            'cpf': [ null, Validators.compose([Validators.required,])],
            'usuarioInsta': [ null, Validators.compose([Validators.required,])],
            'nome': [ null, Validators.compose([Validators.required,])],
            'descricao': [ null, Validators.compose([Validators.required,])],
        })
  }

  ngOnInit() {
  }

  async cadastrar(){
    debugger
    let email = this.formGroup.value.email;
    let senha = this.formGroup.value.senha;
    let dataNasc = this.formGroup.value.dataNasc;
    let preferencia = this.formGroup.value.preferencia;
    let cpf = this.formGroup.value.cpf;
    let usuarioInsta = this.formGroup.value.usuarioInsta;
    let nome = this.formGroup.value.nome;
    let descricao = this.formGroup.value.descricao;

    // this.usuarioService.buscarPorEmail(email).then((json) => {
    //   console.log('Resposta da API:', json);
    //   this.usuario = <Usuario>(json);
    //   if(this.usuario.id > 0){
    //     this.exibirMensagem("Usuário já existe");
    //     console.log('Resposta da API:', this.usuario.nome);
    //     this.navController.navigateBack("/login")
    //   }else {
        let ret = new Usuario();
        ret.email = email;
        ret.cpf = cpf;
        ret.senha = senha;
        ret.dataNasc = dataNasc;
        ret.preferencia = preferencia;
        ret.usuarioInsta = usuarioInsta;
        ret.nome = nome;
        ret.descricao = descricao
        this.usuarioService.salvar(ret);
        this.exibirMensagem("Usuário Cadastrado!");
        this.navController.navigateBack("/login");
      }
  

  async exibirMensagem(texto: string){
    const toast = await this.toastController.create({
      message: texto,
      duration: 1500
    });
    toast.present();
  }

  formatarCPF(event: any) {
    let valor = event.detail.value.replace(/\D/g, '');
    if (valor.length > 11) valor = valor.slice(0, 11);
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    this.formGroup.get('cpf')?.setValue(valor, { emitEvent: false });
  }

  formatarData(event: any) {
    let valor = event.detail.value.replace(/\D/g, '');
    if (valor.length > 8) valor = valor.slice(0, 8);
    valor = valor.replace(/(\d{2})(\d)/, '$1/$2');
    valor = valor.replace(/(\d{2})(\d)/, '$1/$2');
    this.formGroup.get('dataNasc')?.setValue(valor, { emitEvent: false });
  }
}
