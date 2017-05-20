import { Component, Input } from '@angular/core';

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

  hasFocus = false;

}
