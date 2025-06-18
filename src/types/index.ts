export interface Player {
  id: string;
  steamId: string;
  username: string;
  avatar: string;
  level: number;
  xp: number;
  rank: number;
  gamesPlayed: number;
  winRate: number;
  favoriteGame: string;
}

export interface Tournament {
  id: string;
  name: string;
  game: string;
  startDate: string;
  endDate: string;
  prizePool: number;
  participants: number;
  maxParticipants: number;
  status: "upcoming" | "active" | "completed";
  image: string;
}

export interface Match {
  id: string;
  player1: Player;
  player2: Player;
  winner?: Player;
  score: string;
  duration: number;
  date: string;
  game: string;
}

export interface Game {
  id: string;
  name: string;
  image: string;
  players: number;
  category: string;
  description: string;
}

export interface SteamUser {
  steamId: string;
  personaName: string;
  profileUrl: string;
  avatar: string;
  avatarMedium: string;
  avatarFull: string;
}
