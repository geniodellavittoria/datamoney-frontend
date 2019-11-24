import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import {AuthModule} from '../auth/auth.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [ProfileComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    AuthModule
  ]
})
export class UserModule { }
