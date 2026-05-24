import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  breakingNews: string[] = [
    'عاجل: ريال مدريد يعلن رسمياً تعاقده مع كيليان مبابي بصفقة قياسية تمتد لـ 5 مواسم!',
    'عاجل: تقارير صحفية تؤكد رغبة ليفربول في تجديد عقد محمد صلاح براتب تاريخي لمنع انتقاله للدوري السعودي!',
    'عاجل: مانشستر سيتي يتوج بطلاً للدوري الإنجليزي الممتاز لموسم 2025/2026 بعد صراع شرس مع أرسنال!',
    'عاجل: رسمياً.. تعيين زين الدين زيدان مديراً فنياً جديداً للمنتخب الفرنسي بعد مغادرة ديشامب!',
    'عاجل: النادي الأهلي يتوج بلقب دوري أبطال إفريقيا للمرة الثالثة عشر في تاريخه بعد فوز درامي في النهائي!',
    'عاجل: الفيفا يقرر رسمياً تطبيق تقنية التسلل شبه الآلي بالكامل في جميع بطولات القارات القادمة!'
  ];
}
