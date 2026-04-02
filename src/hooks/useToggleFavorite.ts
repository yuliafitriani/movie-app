import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleFavoriteMovie } from "../api/favorite.api";
import { useToast } from "./useToast";

type ToggleFavoriteParams = {
  accountId: number;
  movieId: number;
  favorite: boolean;
};

export const useToggleFavorite = () => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();

  return useMutation({
    mutationFn: ({ accountId, movieId, favorite }: ToggleFavoriteParams) =>
      toggleFavoriteMovie({ accountId, movieId, favorite }),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["favorite-movies"],
      });

      showToast({
        message: variables.favorite
          ? "Success Add to Favorites"
          : "Removed from Favorites",
      });
    },

    onError: () => {
      showToast({
        message: "Failed to update favorite. Please try again.",
      });
    },
  });
};
