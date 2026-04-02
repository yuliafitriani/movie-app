import { getMovieTrailer } from "../../api/movies/trailer.api";

export const trailerMovieQueryKey = {
  detail: (movieId: number) => ["movie", movieId, "trailer"] as const,
};

export const trailerMovieDetailQueryFn = ({
  queryKey,
}: {
  queryKey: ReturnType<typeof trailerMovieQueryKey.detail>;
}) => {
  const [, movieId] = queryKey;

  return getMovieTrailer(movieId);
};
