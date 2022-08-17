import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { ThemePalette } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'tiaa-toolbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Input() color: ThemePalette;
}
