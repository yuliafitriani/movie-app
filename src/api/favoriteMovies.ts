import { apiClient } from "./axios";
import { getMovieTrailer } from "./movies/trailer.api";

export type FavoriteMovie = {
  id: number;
  title: string;
  rating: number;
  posterPath: string;
  overview: string;
  trailer?: string;
};

type TMDBFavoriteMovie = {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
  overview: string;
};

type GetFavoriteMoviesResponse = {
  results: TMDBFavoriteMovie[];
};

export const getFavoriteMovies = async (
  accountId: number,
): Promise<FavoriteMovie[]> => {
  const res = await apiClient.get<GetFavoriteMoviesResponse>(
    `/account/${accountId}/favorite/movies`,
  );

  const movies = await Promise.all(
    res.data.results.map(async (movie) => {
      const trailerKey = await getMovieTrailer(movie.id);

      return {
        id: movie.id,
        title: movie.title,
        rating: movie.vote_average,
        posterPath: movie.poster_path,
        overview: movie.overview,
        trailer: trailerKey?.key,
      };
    }),
  );

  return movies;
};
