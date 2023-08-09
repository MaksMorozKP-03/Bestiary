import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { PasswordComponent } from '../components/password-component/password-component.component';
import { SingleMonsterComponent } from '../components/single-monster/single-monster.component';
import { MonstersListComponent } from '../components/monsters-list/monsters-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'password', component: PasswordComponent },
  { path: `monster`, component: SingleMonsterComponent },
  { path: `list`, component: MonstersListComponent },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
