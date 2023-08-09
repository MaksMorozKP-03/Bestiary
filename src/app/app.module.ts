import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PasswordComponent } from './components/password-component/password-component.component';
import { PasswordStrengthComponent } from './components/password-strength/password-strength.component';
import { RoutingModule } from './routing/routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './header/header.component';
import { SingleMonsterComponent } from './components/single-monster/single-monster.component';
import { MonstersListComponent } from './components/monsters-list/monsters-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordComponent,
    PasswordStrengthComponent,
    SingleMonsterComponent,
    MonstersListComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, RoutingModule, HeaderComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
