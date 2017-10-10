import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'anms-big-input-action',
  templateUrl: './big-input-action.component.html',
  styleUrls: ['./big-input-action.component.scss']
})
export class BigInputActionComponent {
  @Input() disabled = false;
  @Input() icon = '';
  @Input() label = '';
  @Input() color = '';

  @Output() action = new EventEmitter<void>();

  hasFocus = false;

  onClick() {
    this.action.emit();
  }
}
