import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PasswordComponent } from './password-component/password-component.component';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';
import { RoutingModule } from './routing/routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordComponent,
    PasswordStrengthComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HeaderComponent,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
