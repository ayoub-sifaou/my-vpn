import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LoginComponent} from '../../shared/components/dialog/login/login.component';
import { trigger, transition, style, animate, query, stagger, keyframes } from '@angular/animations';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fade', [
      transition('* => expand', [
        query('.collapse', style({ opacity: 0 }), { optional: true }),
        query('.collapse', stagger('300ms', [
            animate('1s ease-in', keyframes([
              style({ opacity: 0 }),
              style({ opacity: .5 }),
              style({ opacity: 1 }),
            ]))
          ]
        ), { optional: true }),
        query('li', style({ opacity: 0 }), { optional: true }),
        query('li', stagger('200ms', [
            animate('0.5s ease-in', keyframes([
              style({ opacity: 0 }),
              style({ opacity: .5 }),
              style({ opacity: 1 }),
            ]))
          ]
        ), { optional: true }),
      ]),
      transition('* => collapse', [
        query('.collapse', stagger('300ms', [
            animate('1s ease-in', keyframes([
              style({ opacity: 1 }),
              style({ opacity: .5 }),
              style({ opacity: 0 }),
            ]))
          ]
        ), { optional: true }),
        query('li', stagger('200ms', [
            animate('0.5s ease-in', keyframes([
              style({ opacity: 1 }),
              style({ opacity: .5 }),
              style({ opacity: 0 }),
            ]))
          ]
        ), { optional: true })
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  listAnimate = '';
  faTimes = faTimes;

  constructor(public dialog: MatDialog) { }

  ngOnInit() { }

  onToggle() {
    this.isCollapsed = !this.isCollapsed;
    this.listAnimate = this.isCollapsed ? 'collapse' : 'expand';
  }

  openDialog(): void {
    this.dialog.open(LoginComponent);
    this.isCollapsed = true;
  }
}
