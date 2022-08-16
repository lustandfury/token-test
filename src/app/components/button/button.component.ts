import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'tiaa-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './button.component.html',
  styleUrls: ['../../../scss/custom-theme.scss', './button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  /**
   * Button Sizes
   */
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() label = 'Button';
  /**
   * Button contents
   * @required
   */
  @Input() isIconButton: boolean = false;
  @Input() isRoundButton: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() color: ThemePalette;
  @Input() icon: string = '';
  @Input() variant: 'basic' | 'flat' | 'stroke' | 'text' | 'raised' = 'basic';

  @Output() onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    return [`tiaa-button--${this.size}`];
  }
}
