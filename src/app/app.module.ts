import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BloqueRedondeadoModule } from './directives/bloque-redondeado/bloque-redondeado.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BloqueRedondeadoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
