import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmitterOneComponent } from './components/emitter-one/emitter-one.component';
import { EmitterTwoComponent } from './components/emitter-two/emitter-two.component';
import { FormsModule } from '@angular/forms';

import { FirstComponentComponent } from './components/first-component/first-component.component';
import { AddressListComponent } from './components/address-list/address-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmitterOneComponent,
    EmitterTwoComponent,
    FirstComponentComponent,
    AddressListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
