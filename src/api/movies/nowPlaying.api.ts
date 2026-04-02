import { apiClient } from "../axios";

export type NowPlayingMovies = {
  id: number;
  title: string;
  rating: number;
  posterPath: string;
};

export type GetNowPlayingMoviesParams = {
  page?: number;
  // signal?: AbortSignal;
};

type TMDBMovie = {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
};

type GetNowPlayingMoviesResponse = {
  page: number;
  results: TMDBMovie[];
};

export const getNowPlayingMovies = async ({
  page,
}: // signal,
GetNowPlayingMoviesParams): Promise<NowPlayingMovies[]> => {
  const res = await apiClient.get<GetNowPlayingMoviesResponse>(
    "/movie/popular",
    {
      params: page ? { page: page } : undefined,
      // signal,
    },
  );

  return res.data.results.map((movie) => ({
    id: movie.id,
    title: movie.title,
    rating: movie.vote_average,
    posterPath: movie.poster_path,
  }));
};
