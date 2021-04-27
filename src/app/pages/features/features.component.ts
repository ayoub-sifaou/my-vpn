import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  featuresData: any = {};
  constructor() { }

  ngOnInit(): void {
    this.featuresData = [
      {
        title: 'Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ex, ipsa minus odit perferendis quae quas sunt veniam.\n' +
          '  Consequatur ducimus enim esse natus necessitatibus odio odit rerum similique unde vel.',
        picture: 'design.svg'
      },
      {
        title: 'Marketing',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ex, ipsa minus odit perferendis quae quas sunt veniam.\n' +
          '  Consequatur ducimus enim esse natus necessitatibus odio odit rerum similique unde vel.',
        picture: 'digital-marketing.svg'
      },
      {
        title: 'Branding',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ex, ipsa minus odit perferendis quae quas sunt veniam.\n' +
          '  Consequatur ducimus enim esse natus necessitatibus odio odit rerum similique unde vel.',
        picture: 'branding.svg'
      },
      {
        title: 'Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ex, ipsa minus odit perferendis quae quas sunt veniam.\n' +
          '  Consequatur ducimus enim esse natus necessitatibus odio odit rerum similique unde vel.',
        picture: 'devo.svg'
      },
      {
        title: 'Photography',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ex, ipsa minus odit perferendis quae quas sunt veniam.\n' +
          '  Consequatur ducimus enim esse natus necessitatibus odio odit rerum similique unde vel.',
        picture: 'photo.svg'
      },
      {
        title: 'Support',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ex, ipsa minus odit perferendis quae quas sunt veniam.\n' +
          '  Consequatur ducimus enim esse natus necessitatibus odio odit rerum similique unde vel.',
        picture: 'technical-support.svg'
      }
    ];
  }

}
