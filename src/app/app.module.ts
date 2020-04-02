import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/public/register/register.component';
import { PublicComponent } from './components/public/public.component';
import { LoginComponent } from './components/public/login/login.component';
import { PresentationLandingPageComponent } from './components/public/presentation-landing-page/presentation-landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PublicComponent,
    LoginComponent,
    PresentationLandingPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
