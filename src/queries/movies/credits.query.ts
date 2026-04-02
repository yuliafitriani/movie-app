import { getMovieCredits } from "../../api/movies/credits.api";

export const movieCreditsQueryKey = {
  list: (movieId: number) => ["movie-credits", movieId] as const,
};

export const movieCreditsListQueryFn = async ({
  queryKey,
}: {
  queryKey: ReturnType<typeof movieCreditsQueryKey.list>;
}) => {
  const [, movieId] = queryKey;

  const credits = await getMovieCredits({ movieId });

  return credits.slice(0, 9);
};
