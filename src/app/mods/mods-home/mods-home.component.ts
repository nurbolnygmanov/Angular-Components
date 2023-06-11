import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent {
  isOpenModal = false;

  accordionItems = [
    {
      title: 'what is Angular',
      content: 'it is frontend framework',
    },
    {
      title: 'what is React',
      content: 'it is frontend ui library',
    },
    {
      title: 'what is Vue',
      content: 'it is smth in between',
    },
  ];

  onClick() {
    this.isOpenModal = !this.isOpenModal;
  }

  onSubmit() {
    console.log('Submitted');
  }
}
