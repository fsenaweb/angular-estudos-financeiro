import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {CreditosComponent} from './components/creditos/creditos.component';
import {FormularioComponent} from './components/formulario/formulario.component';
import {HomeComponent} from "./components/home/home.component";
import {InformacoesComponent} from './components/informacoes/informacoes.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CreditosComponent,
    FormularioComponent,
    InformacoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
