import { searchMovies } from "../../api/movies/search.api";

export const searchMoviesQueryKey = {
  all: ["search-movies"] as const,
  list: ({ query, page }: { query: string; page?: number }) =>
    [...searchMoviesQueryKey.all, { query, page }] as const,
};

export const searchMoviesListQueryFn = ({
  queryKey,
}: {
  queryKey: ReturnType<typeof searchMoviesQueryKey.list>;
}) => {
  const [, { query, page }] = queryKey;
  return searchMovies({ query, page });
};
