import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
  standalone: true,
  imports: [CommonModule, MatCardModule],
  selector: 'tiaa-card',
  templateUrl: './card.component.html',
  styleUrls: ['../../../scss/custom-theme.scss', './card.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CardComponent {
  constructor() {}
  @Input() title: string | undefined = 'Card Title';
  @Input() subtitle: string | undefined = 'Card Subtitle';
  @Input() content: string | undefined = 'Card Content';
  @Input() longText: string | undefined = 'Shiba Inus are a type of dog';
}
