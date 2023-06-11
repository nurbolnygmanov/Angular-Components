import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent {
  data = [
    {
      name: 'Joe',
      age: 24,
      job: 'Designer',
      employed: false,
    },
    {
      name: 'Mike',
      age: 33,
      job: 'Engineer',
      employed: true,
    },
    {
      name: 'Steve',
      age: 52,
      job: 'Doctor',
      employed: true,
    },
  ];

  headers = [
    { key: 'employed', label: 'Has a job' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];
}
