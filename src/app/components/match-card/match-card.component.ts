import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { Match } from '../../models';

@Component({
  selector: 'app-match-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule],
  templateUrl: './match-card.component.html',
  styleUrl: './match-card.component.scss'
})
export class MatchCardComponent {
  @Input() match!: Match;

  getStatusColor(): string {
    if (this.match.status === 'live') return '#EF4444';
    if (this.match.status === 'upcoming') return '#2563EB';
    return '#8B5CF6';
  }

  getStatusText(): string {
    return this.match.status === 'live' ? '🔴 مباشر' : this.match.time;
  }
}
