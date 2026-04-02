import { getMovieDetail } from "../../api/movies/detail.api";

export const movieDetailQueryKey = {
  detail: (id: number) => ["movie-detail", id] as const,
};

export const movieDetailQueryFn = ({
  queryKey,
}: {
  queryKey: readonly [string, number];
}) => {
  const [, id] = queryKey;
  return getMovieDetail(id);
};
