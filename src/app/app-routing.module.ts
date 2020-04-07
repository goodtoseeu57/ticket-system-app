import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PublicComponent} from './components/public/public.component';
import {RegisterComponent} from './components/public/register/register.component';
import {LoginComponent} from './components/public/login/login.component';
import {PrivateComponent} from './components/private/private.component';
import {BookTicketComponent} from './components/private/book-ticket/book-ticket.component';
import {AuthGuard} from './guards/auth.guard';
import {ProfileComponent} from './components/private/profile/profile.component';
import {BookEventComponent} from './components/private/book-event/book-event.component';
import {CreatorsAndEventsComponent} from './components/private/creators-and-events/creators-and-events.component';
import {EventDetailsComponent} from './components/private/event-details/event-details.component';


const routes: Routes = [ {path: 'public' , component: PublicComponent , children: [
        {path: 'register' , component: RegisterComponent} ,
        {path: 'login' , component: LoginComponent}
    ]} ,
    {path: 'private', component: PrivateComponent , canActivateChild: [AuthGuard]  , children: [
            {path: 'book-ticket' , component: BookTicketComponent} ,
            {path: 'profile' , component: ProfileComponent} ,
            {path: 'book-event' , component: BookEventComponent} ,
            {path: 'creators-events' , component: CreatorsAndEventsComponent}  ,
            {path: 'event-details/:id' , component: EventDetailsComponent}
        ] }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
