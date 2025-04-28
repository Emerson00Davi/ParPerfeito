import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  url: string = 'http://localhost:8087/api/v1/usuario';
        
  constructor(private httpClient: HttpClient) { }
  

  async salvar(usuario: Usuario): Promise<Usuario> {
    debugger
    if (usuario.id === 0) {
      return await firstValueFrom(this.httpClient.post<Usuario>(this.url, JSON.stringify(usuario), this.httpHeaders));
    } else {
      return await firstValueFrom(this.httpClient.put<Usuario>(this.url, JSON.stringify(usuario), this.httpHeaders));
    }
  }

  async listar(): Promise<Usuario[]> {
    return await firstValueFrom(this.httpClient.get<Usuario[]>(this.url));
  }

  async buscarPorId(id: number): Promise<Usuario> {
    let urlAuxiliar = this.url + "/" + id;
    return await firstValueFrom(this.httpClient.get<Usuario>(urlAuxiliar));
  }

  async buscarPorEmail(email: string): Promise<Usuario> {
    debugger
    let urlAuxiliar = this.url + "/" + email + "/getByEmail";
    return await firstValueFrom(this.httpClient.get<Usuario>(urlAuxiliar));

  }

  async excluir(id: number): Promise<Usuario> {
    let urlAuxiliar = this.url + "/" + id;
    return await firstValueFrom(this.httpClient.delete<Usuario>(urlAuxiliar));
  }

  async autenticar(email: string, senha: string): Promise<Usuario>{
    let urlAux = this.url + "/" + email + "/" + senha + '/authenticate';
    return await firstValueFrom(this.httpClient.get<Usuario>(urlAux));
  }

  registrarAutenticacao(usuario: Usuario){
    localStorage.setItem('usuarioAutenticado', JSON.stringify(usuario));
  }

  recuperarAutenticacao(): Usuario{
    debugger
    console.log(localStorage.getItem('usuarioAutenticado'));
    return JSON.parse(localStorage.getItem('usuarioAutenticado') || '{}');
    
  }

  encerrarAutenticacao(){
    localStorage.removeItem('usuarioAutenticado');
  }

  // //async verificarLogin(login: string): Promise<boolean> {
  //   let urlAuxiliar = this.url + "/" + login + '/login/exists';
  //   return await firstValueFrom(this.httpClient.get<boolean>(urlAuxiliar));
  // }
}
