import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PublicComponent} from './components/public/public.component';
import {RegisterComponent} from './components/public/register/register.component';
import {LoginComponent} from './components/public/login/login.component';
import {PrivateComponent} from './components/private/private.component';
import {BookTicketComponent} from './components/private/book-ticket/book-ticket.component';
import {AuthGuard} from './guards/auth.guard';


const routes: Routes = [ {path: 'public' , component: PublicComponent , children: [
        {path: 'register' , component: RegisterComponent} ,
        {path: 'login' , component: LoginComponent}
    ]} ,
    {path: 'private', component: PrivateComponent , canActivateChild: [AuthGuard]  , children: [
            {path: 'book-ticket' , component: BookTicketComponent}
        ] }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
