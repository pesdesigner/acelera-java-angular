import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmitterOneComponent } from './components/emitter-one/emitter-one.component';
import { EmitterTwoComponent } from './components/emitter-two/emitter-two.component';
import { FormsModule } from '@angular/forms';

import { FirstComponentComponent } from './components/first-component/first-component.component';
import { AddressListComponent } from './components/address-list/address-list.component';
import { PipesComponent } from './components/pipes/pipes.component';
import localePT from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ProdutoListaComponent } from './components/produto-lista/produto-lista.component';
import { ProdutoDetalhesComponent } from './components/produto-detalhes/produto-detalhes.component';
registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent,
    EmitterOneComponent,
    EmitterTwoComponent,
    FirstComponentComponent,
    AddressListComponent,
    PipesComponent,
    ProdutoListaComponent,
    ProdutoDetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
