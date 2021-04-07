import { Component, OnInit } from '@angular/core';
import {A11y, Navigation, Autoplay, Pagination, Scrollbar, Mousewheel} from 'swiper';
import SwiperCore from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Autoplay, Pagination, Mousewheel, Scrollbar, A11y]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
