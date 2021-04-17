import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // console.log(window.location.href);
    // console.log(this.router.navigate(['']));
    const a = this.router.isActive('contact', true);
    console.log(" router => " + a);
  }

}
