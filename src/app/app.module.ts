import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {photosFoodComponent} from './photos/photosFood/photosFood.component';
import {photosAtmosComponent} from './photos/photosAtmos/photosAtmos.component';
import {photoComponent} from './photos/photo.component';
import {mainPageComponent} from './mainPage/mainPage.component';
import {hostingComponent} from './hosting/hosting.component';
import {contactComponent} from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    photosFoodComponent,
    photosAtmosComponent,
    photoComponent,
    mainPageComponent,
    hostingComponent,
    contactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
