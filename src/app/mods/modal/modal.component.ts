import { Component, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Output() close = new EventEmitter();

  constructor(private modalRef: ElementRef<HTMLDivElement>) {}

  ngOnInit() {
    document.body.appendChild(this.modalRef.nativeElement);
  }

  ngOnDestroy() {
    this.modalRef.nativeElement.remove();
  }

  onCloseClick() {
    this.close.emit();
  }
}
