import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { EmitterOneComponent } from './components/emitter-one/emitter-one.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ProdutoListaComponent } from './components/produto-lista/produto-lista.component';
import { ProdutoDetalhesComponent } from './components/produto-detalhes/produto-detalhes.component';

const routes: Routes = [
  {path: 'primeiro-componente', component: FirstComponentComponent},
  {path: 'pipes-componente', component: PipesComponent},
  {path: 'emitindo-evento-componente', component: EmitterOneComponent},
  {path: 'lista-produtos', component: ProdutoListaComponent},
  {path: 'produto-detalhe/:id', component: ProdutoDetalhesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
