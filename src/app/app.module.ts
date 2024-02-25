import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmitterOneComponent } from './components/emitter-one/emitter-one.component';
import { EmitterTwoComponent } from './components/emitter-two/emitter-two.component';
import { HttpClientModule } from '@angular/common/http';
import { BootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { AddressListComponent } from './components/address-list/address-list.component';
import { PipesComponent } from './components/pipes/pipes.component';
import localePT from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ProdutoListaComponent } from './components/produto-lista/produto-lista.component';
import { ProdutoDetalhesComponent } from './components/produto-detalhes/produto-detalhes.component';
import { ClienteListaComponent } from './components/cliente-lista/cliente-lista.component';
import { ClienteCadastroComponent } from './components/cliente-cadastro/cliente-cadastro.component';
import { CustomHeaderComponent } from './components/custom-header/custom-header.component';
import { CustomFooterComponent } from './components/custom-footer/custom-footer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HttpInterceptorProviders } from './interceptors/http-interceptor';
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
    ProdutoDetalhesComponent,
    ClienteListaComponent,
    ClienteCadastroComponent,
    CustomHeaderComponent,
    CustomFooterComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BootstrapModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpInterceptorProviders,
    {
      provide: LOCALE_ID, useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
