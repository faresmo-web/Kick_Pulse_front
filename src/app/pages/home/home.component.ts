import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatchCardComponent } from '../../components/match-card/match-card.component';
import { NewsCardComponent } from '../../components/news-card/news-card.component';
import { Match, News } from '../../models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatchCardComponent, NewsCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  liveMatches: Match[] = [
    {
      id: '1',
      homeTeam: 'مانشستر يونايتد',
      awayTeam: 'ليفربول',
      homeScore: 2,
      awayScore: 1,
      time: '45+2',
      status: 'live'
    },
    {
      id: '2',
      homeTeam: 'بايرن ميونيخ',
      awayTeam: 'بوروسيا دورتموند',
      homeScore: 1,
      awayScore: 1,
      time: '62',
      status: 'live'
    },
    {
      id: '3',
      homeTeam: 'ريال مدريد',
      awayTeam: 'برشلونة',
      homeScore: 3,
      awayScore: 2,
      time: '89',
      status: 'live'
    }
  ];

  trendingNews: News[] = [
    {
      id: '1',
      title: 'كريستيانو يحطم رقم الأهداف التاريخي',
      excerpt: 'النجم الأسطوري يتجاوز كل الأرقام القياسية السابقة بهدفه الـ900 في مسيرة لا تُنسى.',
      date: '23 مايو 2026',
      category: 'player',
      image: 'https://images.unsplash.com/photo-1518611505868-48510c2bde89?w=400&h=300&fit=crop'
    },
    {
      id: '2',
      title: 'نافذة الانتقالات: أهم 5 صفقات مؤكدة',
      excerpt: 'تشهد فترة الانتقالات الصيفية تحركات كبيرة عبر الدوريات الأوروبية مع صفقات قياسية.',
      date: '22 مايو 2026',
      category: 'transfer',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop'
    },
    {
      id: '3',
      title: 'أبرز لقطات نهائي دوري الأبطال',
      excerpt: 'نهائي لا يُنسى بين عملاقين يتصارعان على لقب أوروبا في أداء درامي.',
      date: '21 مايو 2026',
      category: 'match',
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9e55?w=400&h=300&fit=crop'
    }
  ];
}
