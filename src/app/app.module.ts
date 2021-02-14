import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './elements/footer/footer.component';
import { HeaderComponent } from './elements/header/header.component';
import { SliderComponent } from './elements/slider/slider.component';
import { ActiviteNumberComponent } from './elements/activite-number/activite-number.component';
import { CountUpModule } from 'ngx-countup';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SliderComponent,
    ActiviteNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountUpModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
