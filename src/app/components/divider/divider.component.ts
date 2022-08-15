import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'tiaa-divider',
  standalone: true,
  imports: [CommonModule, MatDividerModule],
  templateUrl: './divider.component.html',
  styleUrls: ['../../../scss/custom-theme.scss', './divider.component.scss'],
})
export class DividerComponent {
  constructor() {}
  @Input() inset: boolean = false;
  @Input() vertical: boolean = false;
}
