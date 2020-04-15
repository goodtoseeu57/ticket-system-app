import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/public/register/register.component';
import { PublicComponent } from './components/public/public.component';
import { LoginComponent } from './components/public/login/login.component';
import { PresentationLandingPageComponent } from './components/public/presentation-landing-page/presentation-landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { PrivateComponent } from './components/private/private.component';
import { BookTicketComponent } from './components/private/book-ticket/book-ticket.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import { ProfileComponent } from './components/private/profile/profile.component';
import { BookEventComponent } from './components/private/book-event/book-event.component';
import {MatSelectModule} from '@angular/material/select';
import { CreatorsAndEventsComponent } from './components/private/creators-and-events/creators-and-events.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { EventDetailsComponent } from './components/private/event-details/event-details.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NotFoundComponent } from './components/public/not-found/not-found.component';
import { UserActionsComponent } from './components/private/user-actions/user-actions.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PublicComponent,
    LoginComponent,
    PresentationLandingPageComponent,
    PrivateComponent,
    BookTicketComponent,
    ProfileComponent,
    BookEventComponent,
    CreatorsAndEventsComponent,
    EventDetailsComponent,
    NotFoundComponent,
    UserActionsComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule,
        MatCardModule, HttpClientModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule,
        MatChipsModule, MatDatepickerModule,
        MatNativeDateModule, MatGridListModule, MatMenuModule,
        FormsModule, MatSelectModule, MatTableModule,
        MatPaginatorModule, MatProgressSpinnerModule, MatSnackBarModule,
        MatSlideToggleModule, MatSliderModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
