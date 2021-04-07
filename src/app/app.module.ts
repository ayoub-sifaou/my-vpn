import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './elements/footer/footer.component';
import { HeaderComponent } from './elements/header/header.component';
import { CountUpModule } from 'ngx-countup';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ComponentEvaluatedComponent } from './home/component-evaluated/component-evaluated.component';
import {SliderComponent} from './elements/header/slider/slider.component';
import { SwiperModule } from 'swiper/angular';
import { LoginComponent } from './shared/components/dialog/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ComponentEvaluatedComponent,
    SliderComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountUpModule,
    NgbModule,
    SwiperModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
