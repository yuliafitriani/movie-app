import { useQuery } from "@tanstack/react-query";
import { getFavoriteMovies } from "../api/favoriteMovies";

export const useFavoriteMovies = (accountId?: number) =>
  useQuery({
    queryKey: ["favorite-movies", accountId],
    queryFn: () => getFavoriteMovies(accountId!),
    enabled: !!accountId,
  });
