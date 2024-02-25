import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localePT from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
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
    ClienteListaComponent,
    ClienteCadastroComponent,
    CustomHeaderComponent,
    CustomFooterComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BootstrapModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
