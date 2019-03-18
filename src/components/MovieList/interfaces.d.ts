export interface MovieListProps {
  movies: Movie[];
  searching: boolean;
}

export interface Movie {
  id: string;
  name: string;
  poster: string;
  description: string;
  time: string;
  genre: string;
  stars: string;
  director: string;
  imdb: string;
  release: string;
  rating: string;
}