export interface GameFilters {
  searchTerm: string;
  genre: string;
  platform: string;
  sortOrder: string;
}

export interface WishlistStats {
  totalGames: number;
  platforms: number;
  genres: number;
  averageRating: number;
}
