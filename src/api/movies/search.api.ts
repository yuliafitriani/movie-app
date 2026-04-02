import { apiClient } from "../axios";

export type SearchMovie = {
  id: number;
  title: string;
  overview: string;
  rating: number;
  posterPath: string;
};

export type SearchMoviesParams = {
  query: string;
  page?: number;
  // signal?: AbortSignal;
};

type TMDBMovie = {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  poster_path: string;
};

type SearchMoviesResponse = {
  page: number;
  results: TMDBMovie[];
};

export const searchMovies = async ({
  query,
  page,
}: SearchMoviesParams): Promise<SearchMovie[]> => {
  const res = await apiClient.get<SearchMoviesResponse>("/search/movie", {
    params: {
      query,
      ...(page ? { page } : {}),
    },
    // signal,
  });

  return res.data.results.map((movie) => ({
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    rating: movie.vote_average,
    posterPath: movie.poster_path,
  }));
};
