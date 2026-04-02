import type { QueryFunctionContext } from "@tanstack/react-query";
import { getPopularMovies } from "../../api/movies/popular.api";

export const popularMoviesQueryKey = {
  all: ["popularMovies"] as const,
  list: (params: { page?: number }) =>
    [...popularMoviesQueryKey.all, "list", params] as const,
};

type PopularMoviesListKey = ReturnType<typeof popularMoviesQueryKey.list>;

export const popularMoviesListQueryFn = async ({
  queryKey,
}: QueryFunctionContext<PopularMoviesListKey>) => {
  const [, , params] = queryKey;
  return getPopularMovies({ page: params?.page });
};
