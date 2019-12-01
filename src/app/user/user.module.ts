import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import {AuthModule} from '../auth/auth.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {UserRoutingModule} from './user-routing.module';
import {MaterialModule} from '../material.module';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [
    ProfileComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    AuthModule,
    UserRoutingModule,
    SharedModule,
  ]
})
export class UserModule { }
