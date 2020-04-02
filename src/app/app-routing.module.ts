import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PublicComponent} from './components/public/public.component';
import {RegisterComponent} from './components/public/register/register.component';
import {LoginComponent} from './components/public/login/login.component';


const routes: Routes = [ {path: 'public' , component: PublicComponent , children: [
        {path: 'register' , component: RegisterComponent} ,
        {path: 'login' , component: LoginComponent}
    ]}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
