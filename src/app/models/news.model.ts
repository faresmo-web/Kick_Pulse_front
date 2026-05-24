export interface News {
  id: string;
  title: string;
  excerpt: string;
  image?: string;
  date: string;
  category: 'transfer' | 'match' | 'team' | 'player';
}
