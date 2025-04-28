import { Injectable } from '@angular/core';
import { PessoaTemCaracteristica } from '../model/pessoa-tem-caracteristica';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaTemCaracteristicaService {

  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  url: string = 'http://localhost:8087/api/v1/associacao';

  constructor(private httpClient: HttpClient) { }

  async associar(ptc: PessoaTemCaracteristica): Promise<PessoaTemCaracteristica> {
    return await firstValueFrom(
      this.httpClient.post<PessoaTemCaracteristica>(this.url, JSON.stringify(ptc), this.httpHeaders)
    );
  }

  // 🔽 Novo método: listar características associadas a uma pessoa
  async getPorPessoa(idPessoa: number): Promise<PessoaTemCaracteristica[]> {
    return await firstValueFrom(this.httpClient.get<PessoaTemCaracteristica[]>(`${this.url}/pessoa/${idPessoa}`));
  }
  

  // 🔽 Novo método: remover associação entre pessoa e característica
  async remover(idPessoa: number, idCaracteristica: number): Promise<void> {
    const endpoint = `${this.url}/pessoa/${idPessoa}/caracteristica/${idCaracteristica}`;
    await firstValueFrom(this.httpClient.delete<void>(endpoint));
  }
}
