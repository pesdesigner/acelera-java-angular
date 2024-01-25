import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private produtos: Produto[] = [];

  constructor() { 
    this.produtos.push(
      {
        id: '10',
        nome: 'camiseta preta',
        descricao: 'boa camiseta',
        valor: 30.99
      },
      {
        id: '20',
        nome: 'camiseta azul',
        descricao: 'boa camiseta azul',
        valor: 40.99
      }
    );
  }

  obterTodos(): Produto[] {
    return this.produtos;
  }

  obterPorId(id: string): Produto | undefined {
    return this.produtos.find(p => p.id === id);
  }
}
