import { useQuery } from "@tanstack/react-query";
import {
  popularMoviesQueryKey,
  popularMoviesListQueryFn,
} from "../queries/movies/popular.query";

export type UsePopularMoviesOptions = {
  page?: number;
};

export const usePopularMovies = (options: UsePopularMoviesOptions = {}) => {
  const { page } = options;

  return useQuery({
    queryKey: popularMoviesQueryKey.list({ page }),
    queryFn: popularMoviesListQueryFn,
  });
};
