import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AUTH_ROUTES } from './authentication.routes';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AUTH_ROUTES),
    MaterialModule
  ]
})
export class AuthenticationModule { }
