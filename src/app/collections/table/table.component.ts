import { Component, Input } from '@angular/core';

type Header = {
  key: string;
  label: string;
};

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent<T extends Record<string, unknown>> {
  @Input() data: T[] = [];
  @Input() headers: Header[] = [];
  @Input() classNames = '';
}
