import { Component } from '@angular/core';

export interface Pessoa {
  nome: string;
  idade: string;
}

@Component({
  selector: 'app-emitter-one',
  templateUrl: './emitter-one.component.html',
  styleUrls: ['./emitter-one.component.css']
})
export class EmitterOneComponent {
  pessoa: Pessoa[] = [];

  onAdicionarPessoa(pessoa: Pessoa) {
    this.pessoa.push(pessoa);
  }
}


