import { useInfiniteQuery } from "@tanstack/react-query";
import {
  nowPlayingMoviesQueryKey,
  nowPlayingMoviesListQueryFn,
} from "../queries/movies/nowPlaying.query";

export const useNowPlayingMovies = () => {
  return useInfiniteQuery({
    queryKey: nowPlayingMoviesQueryKey.list(),
    queryFn: nowPlayingMoviesListQueryFn,
    initialPageParam: 1,
    getNextPageParam: (_lastPage, pages) => pages.length + 1,
  });
};
