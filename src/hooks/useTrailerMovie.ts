import { useQuery } from "@tanstack/react-query";
import { getMovieTrailer } from "../api/movies/trailer.api";

export const trailerMovieQueryKey = {
  detail: (movieId: number) => ["movie", movieId, "trailer"] as const,
};

type UseTrailerMovieOptions = {
  movieId: number;
};

export const useTrailerMovie = ({ movieId }: UseTrailerMovieOptions) => {
  return useQuery({
    queryKey: trailerMovieQueryKey.detail(movieId),
    queryFn: () => getMovieTrailer(movieId),
    enabled: !!movieId,
  });
};
