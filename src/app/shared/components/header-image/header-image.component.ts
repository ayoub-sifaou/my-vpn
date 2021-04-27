import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-image',
  templateUrl: './header-image.component.html',
  styleUrls: ['./header-image.component.scss']
})
export class HeaderImageComponent implements OnInit {
  @Input() imageHeader: string = '';
  @Input() titleHeaderImage: string = '';
  @Input() descriptionHeaderImage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
