import { useQuery } from "@tanstack/react-query";
import {
  searchMoviesQueryKey,
  searchMoviesListQueryFn,
} from "../queries/movies/search.query";

export type UseSearchMoviesOptions = {
  query: string;
  page?: number;
};

export const useSearchMovies = (options: UseSearchMoviesOptions) => {
  const { query, page } = options;

  return useQuery({
    queryKey: searchMoviesQueryKey.list({ query, page }),
    queryFn: searchMoviesListQueryFn,
    enabled: !!query, // only fetch when query exists
  });
};
