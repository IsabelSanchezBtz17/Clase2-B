import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnoComponent } from './components/uno/uno.component';
import { GradosPipe } from './libs/pipes/grados.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UnoComponent,
    GradosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
