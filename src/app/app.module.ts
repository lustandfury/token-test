import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { DividerComponent } from './components/divider/divider.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonComponent, DividerComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
