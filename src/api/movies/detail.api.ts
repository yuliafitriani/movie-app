import { apiClient } from "../axios";

export type MovieDetail = {
  id: number;
  title: string;
  overview: string;
  rating: number;
  releaseDate: string;
  backdropPath: string;
  posterPath: string;
  runtime: number;
};

type TMDBMovieDetail = {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  release_date: string;
  backdrop_path: string;
  poster_path: string;
  runtime: number;
};

export const getMovieDetail = async (id: number): Promise<MovieDetail> => {
  const res = await apiClient.get<TMDBMovieDetail>(`/movie/${id}`);

  const movie = res.data;

  return {
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    rating: movie.vote_average,
    releaseDate: movie.release_date,
    backdropPath: movie.backdrop_path,
    posterPath: movie.poster_path,
    runtime: movie.runtime,
  };
};
