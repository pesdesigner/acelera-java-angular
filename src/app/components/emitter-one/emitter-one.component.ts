import { Component } from '@angular/core';
import { Pessoa } from 'src/app/interfaces/Pessoa';

@Component({
  selector: 'app-emitter-one',
  templateUrl: './emitter-one.component.html',
  styleUrls: ['./emitter-one.component.css']
})
export class EmitterOneComponent {
  pessoa: Pessoa[] = [];

  onAdicionarPessoa(pessoa: Pessoa): void {
    this.pessoa.push(pessoa);
  }
}


