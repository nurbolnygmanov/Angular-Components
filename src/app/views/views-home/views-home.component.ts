import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent {
  stats = [
    {
      value: 22,
      label: '# of users',
    },
    {
      value: 900,
      label: 'Revenue',
    },
    {
      value: 50,
      label: 'Satisfaction',
    },
  ];

  items = [
    {
      imagePath: '../../assets/images/couch.jpeg',
      title: 'Couch',
      description: 'Comfy couch',
    },
    {
      imagePath: '../../assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'Great dresser',
    },
  ];
}
