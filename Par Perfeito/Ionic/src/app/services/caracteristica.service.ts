import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Caracteristica } from '../model/caracteristica';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaracteristicaService {

  httpHeaders = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    }
  
    url: string = 'http://localhost:8087/api/v1/caracteristica';
  constructor(private httpClient: HttpClient) { }

  async getCaracteristicas(): Promise<Caracteristica[]>{
    return await firstValueFrom(this.httpClient.get<Caracteristica[]>(this.url));
 }

 async getCaracteristicasPorIds(ids: number[]): Promise<Caracteristica[]> {
  const endpoint = `${this.url}/ids`;
  return await firstValueFrom(
    this.httpClient.post<Caracteristica[]>(endpoint, { ids })
  );
}



 
}
