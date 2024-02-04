import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Produto } from 'src/app/interfaces/Produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.css']
})
export class ProdutoDetalhesComponent {
  produto: Produto | undefined;

  constructor(private activatedRoute: ActivatedRoute, private produtoService: ProdutoService){
    this.activatedRoute.params.subscribe((params: Params) => {
      this.produto = this.produtoService.obterPorId(params['id']);
    });
  }
}
