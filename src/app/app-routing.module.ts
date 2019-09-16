import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { photosFoodComponent } from './photos/photosFood/photosFood.component';
import { photosAtmosComponent } from './photos/photosAtmos/photosAtmos.component';
import { mainPageComponent } from './mainPage/mainPage.component';
import { hostingComponent } from './hosting/hosting.component';
import { contactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'photosFood', component: photosFoodComponent },
  { path: 'photosAtmos', component: photosAtmosComponent },
  { path: 'mainPage', component: mainPageComponent },
  { path: '', component: mainPageComponent },
  { path: 'hosting', component: hostingComponent },
  { path: 'contact', component: contactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
