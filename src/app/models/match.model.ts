export interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  time: string;
  status: 'live' | 'upcoming' | 'finished';
  homeTeamLogo?: string;
  awayTeamLogo?: string;
}
