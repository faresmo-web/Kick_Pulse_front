import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { News } from '../../models';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss'
})
export class NewsCardComponent {
  @Input() news!: News;

  getCategoryColor(): string {
    switch (this.news.category) {
      case 'transfer':
        return '#FACC15';
      case 'match':
        return '#2563EB';
      case 'team':
        return '#8B5CF6';
      case 'player':
        return '#EF4444';
      default:
        return '#64748B';
    }
  }

  getCategoryLabel(category: News['category']): string {
    switch (category) {
      case 'transfer':
        return 'انتقالات';
      case 'match':
        return 'مباراة';
      case 'team':
        return 'فريق';
      case 'player':
        return 'لاعب';
      default:
        return 'أخبار';
    }
  }

  getNewsImage(): string {
    return this.news.image || 'https://images.unsplash.com/photo-1579952363873-27f3bade9e55?w=400&h=300&fit=crop';
  }
}
