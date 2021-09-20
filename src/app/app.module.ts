import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GenerarPedidoComponent } from './generar-pedido/generar-pedido.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, GenerarPedidoComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
