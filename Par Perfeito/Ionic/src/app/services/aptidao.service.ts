import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { Aptidao } from '../model/aptidao';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AptidaoService {

  httpHeaders = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    }
  
    url: string = 'http://localhost:8087/api/v1/aptidao';
  constructor(private httpClient: HttpClient) { }

  async gerarMatches(aptidao: Aptidao): Promise<Aptidao[]>{
    return await firstValueFrom(this.httpClient.post<Aptidao[]>(this.url, JSON.stringify(aptidao), this.httpHeaders));
  }

  async listarMatches(idPessoa1: number): Promise<Aptidao[]>{
    let urlAuxiliar = this.url + "/" + idPessoa1;
    return await firstValueFrom(this.httpClient.get<Aptidao[]>(urlAuxiliar));
  }

  async removerMatchesDoUsuario(idPessoa: number): Promise<void> {
    const urlRemover = `${this.url}/usuario/${idPessoa}`;
    await firstValueFrom(this.httpClient.delete<void>(urlRemover, this.httpHeaders));
  }
}
