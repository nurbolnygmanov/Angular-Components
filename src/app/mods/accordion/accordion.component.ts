import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent {
  @Input() items: { title: string; content: string }[] = [];
  openItemIndex = 0;

  onHeaderToggle(index: number) {
    if (index === this.openItemIndex) this.openItemIndex = -1;
    else this.openItemIndex = index;
  }
}
