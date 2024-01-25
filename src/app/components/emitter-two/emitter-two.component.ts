import { Component, EventEmitter, Output } from '@angular/core';
import { Pessoa } from '../emitter-one/emitter-one.component';

@Component({
  selector: 'app-emitter-two',
  templateUrl: './emitter-two.component.html',
  styleUrls: ['./emitter-two.component.css']
})
export class EmitterTwoComponent {
  @Output() adicionarPessoa: EventEmitter<Pessoa> = new EventEmitter<Pessoa>();
  nome: string = '';
  idade: string = '';

  handlerAdicionarPessoa(){
    this.adicionarPessoa.emit({
      nome: this.nome,
      idade: this.idade
    });
  }
}
