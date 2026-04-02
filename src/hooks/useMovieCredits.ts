import { useQuery } from "@tanstack/react-query";
import {
  movieCreditsQueryKey,
  movieCreditsListQueryFn,
} from "../queries/movies/credits.query";

export type UseMovieCreditsOptions = {
  movieId: number;
};

export const useMovieCredits = ({ movieId }: UseMovieCreditsOptions) => {
  return useQuery({
    queryKey: movieCreditsQueryKey.list(movieId),
    queryFn: movieCreditsListQueryFn,
    enabled: !!movieId,
  });
};
