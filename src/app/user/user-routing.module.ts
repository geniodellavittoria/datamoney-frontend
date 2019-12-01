import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {AuthGuardService} from '../auth/auth.guard';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]},
  {path: 'register', component: RegisterComponent},
  { path: '', redirectTo: 'register', pathMatch: 'full'},
  { path: '**', redirectTo: 'register', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
