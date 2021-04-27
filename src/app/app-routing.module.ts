import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ContactComponent} from './pages/contact/contact.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {FeaturesComponent} from './pages/features/features.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'features', component: FeaturesComponent},
  {path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
