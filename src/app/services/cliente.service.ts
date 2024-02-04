import { Injectable } from '@angular/core';
import { BASE_URL_CLIENT_API } from '../envs/env';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl: string = BASE_URL_CLIENT_API
  private resource: string = 'cliente'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.baseUrl}/${this.resource}`)
  }

  getById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.baseUrl}/${this.resource}/${id}`)
  }
  save(cliente: Partial<Cliente>): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.baseUrl}/${this.resource}`, cliente)
  }
  delete(id: number): Observable<{}> {
    return this.http.delete(`${this.baseUrl}/${this.resource}/${id}`)
  }

  update(cliente: Partial<Cliente>): Observable<Cliente> {
    return this.http.patch<Cliente>(`${this.baseUrl}/${this.resource}/${cliente.id}`, cliente)
  }

}
