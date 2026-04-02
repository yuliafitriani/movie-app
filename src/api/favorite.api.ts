import { apiClient } from "./axios";

export type ToggleFavoriteParams = {
  accountId: number;
  movieId: number;
  favorite: boolean;
};

export const toggleFavoriteMovie = async ({
  accountId,
  movieId,
  favorite,
}: ToggleFavoriteParams) => {
  return apiClient.post(`/account/${accountId}/favorite`, {
    media_type: "movie",
    media_id: movieId,
    favorite,
  });
};
