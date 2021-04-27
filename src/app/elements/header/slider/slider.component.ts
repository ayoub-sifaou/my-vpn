import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  constructor() {

  }
  ngAfterViewInit(): void {
    // install Swiper modules
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  }
  ngOnInit(): void {
  }
}
