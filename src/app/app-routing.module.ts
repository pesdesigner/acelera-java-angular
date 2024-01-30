import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { EmitterOneComponent } from './components/emitter-one/emitter-one.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ProdutoListaComponent } from './components/produto-lista/produto-lista.component';
import { ProdutoDetalhesComponent } from './components/produto-detalhes/produto-detalhes.component';
import { ClienteListaComponent } from './components/cliente-lista/cliente-lista.component';
import { ClienteCadastroComponent } from './components/cliente-cadastro/cliente-cadastro.component';

const routes: Routes = [
  {path: 'primeiro-componente', component: FirstComponentComponent},
  {path: 'pipes-componente', component: PipesComponent},
  {path: 'emitindo-evento-componente', component: EmitterOneComponent},
  {path: 'lista-produtos', component: ProdutoListaComponent},
  {path: 'produto-detalhe/:id', component: ProdutoDetalhesComponent},
  {path: 'cliente-lista', component: ClienteListaComponent },
  {path: 'cadastro-cliente', component: ClienteCadastroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
