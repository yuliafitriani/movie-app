import type { QueryFunctionContext } from "@tanstack/react-query";
import { getNowPlayingMovies } from "../../api/movies/nowPlaying.api";

export const nowPlayingMoviesQueryKey = {
  all: ["nowPlayingMovies"] as const,
  list: () => [...nowPlayingMoviesQueryKey.all, "list"] as const,
};

type NowPlayingMoviesListKey = ReturnType<typeof nowPlayingMoviesQueryKey.list>;

export const nowPlayingMoviesListQueryFn = async ({
  pageParam = 1,
}: QueryFunctionContext<NowPlayingMoviesListKey, number>) => {
  return getNowPlayingMovies({ page: pageParam });
};
