import { getFavoriteMovies } from "../api/favoriteMovies";

export const favoriteMoviesQueryKey = {
  all: (accountId: number) => ["favorite-movies", accountId] as const,
};

export const favoriteMoviesQueryFn = (accountId: number) => async () =>
  getFavoriteMovies(accountId);
