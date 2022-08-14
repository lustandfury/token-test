import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'tiaa-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './button.component.html',
  styleUrls: ['../../../scss/custom-theme.scss', './button.component.scss'],
})
export class ButtonComponent {
  /**
   * Button Sizes
   */
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   * @required
   */
  @Input() label = 'Button';

  @Output() onClick = new EventEmitter<Event>();

  /* Properties */
  @Input() isDisabled: boolean = false;
  @Input() palette: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() icon: string = '';
  @Input() variant: 'flat' | 'stroke' | 'text' = 'flat';
}
