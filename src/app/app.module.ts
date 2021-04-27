import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './elements/footer/footer.component';
import { HeaderComponent } from './elements/header/header.component';
import { CountUpModule } from 'ngx-countup';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { ComponentEvaluatedComponent } from './pages/home/component-evaluated/component-evaluated.component';
import {SliderComponent} from './elements/header/slider/slider.component';
import { SwiperModule } from 'swiper/angular';
import { LoginComponent } from './shared/components/dialog/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactComponent } from './pages/contact/contact.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FeaturesComponent } from './pages/features/features.component';
import { HeaderImageComponent } from './shared/components/header-image/header-image.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ComponentEvaluatedComponent,
    SliderComponent,
    LoginComponent,
    ContactComponent,
    NotFoundComponent,
    FeaturesComponent,
    HeaderImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountUpModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    FontAwesomeModule,
    MatButtonModule,
    MatIconModule,
    SwiperModule
  ],
  exports: [
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    FontAwesomeModule,
    MatButtonModule,
    MatIconModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
