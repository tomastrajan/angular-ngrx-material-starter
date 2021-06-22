import { Component, OnInit, Input} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-mat-spinner-overlay',
  templateUrl: './mat-spinner-overlay.component.html',
  styleUrls: ['./mat-spinner-overlay.component.scss'],
})
export class MatSpinnerOverlayComponent implements OnInit {
  
  constructor() {}

  @Input() value: number = 100;
  @Input() diameter: number = 100;
  @Input() mode: ProgressSpinnerMode = 'indeterminate';
  @Input() strokeWidth: number = 10;
  @Input() color: ThemePalette = 'primary';
  
  @Input() overlay: boolean = false;

  ngOnInit() {}
}
