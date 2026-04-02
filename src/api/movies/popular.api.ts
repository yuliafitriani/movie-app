import { apiClient } from "../axios";

export type PopularMovies = {
  id: number;
  title: string;
  rating: number;
  posterPath: string;
};

export type GetPopularMoviesParams = {
  page?: number;
  // signal?: AbortSignal;
};

type TMDBMovie = {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
};

type GetPopularMoviesResponse = {
  page: number;
  results: TMDBMovie[];
};

export const getPopularMovies = async ({
  page,
}: // signal,
GetPopularMoviesParams): Promise<PopularMovies[]> => {
  const res = await apiClient.get<GetPopularMoviesResponse>(
    "/trending/movie/day",
    {
      params: page ? { _page: page } : undefined,
      // signal,
    }
  );

  return res.data.results.map((movie) => ({
    id: movie.id,
    title: movie.title,
    rating: movie.vote_average,
    posterPath: movie.poster_path,
  }));
};
