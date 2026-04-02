import { Heart } from "iconsax-reactjs";
import { useAccount } from "../../queries/account.query";
import { useFavoriteMovies } from "../../hooks/useFavoriteMovies";
import { useToggleFavorite } from "../../hooks/useToggleFavorite";

type Props = {
  movieId: number;
};

export const FavoriteButton = ({ movieId }: Props) => {
  const { data: account } = useAccount();
  const { data: favorites } = useFavoriteMovies(account?.id);
  const toggleFavorite = useToggleFavorite();

  const isFavorite = favorites?.some((movie) => movie.id === movieId);

  const handleClick = () => {
    if (!account) return;

    toggleFavorite.mutate({
      accountId: account.id,
      movieId,
      favorite: !isFavorite,
    });
  };

  return (
    <button
      onClick={handleClick}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#181D27] bg-black/60"
      aria-label="Toggle Favorite"
    >
      <Heart
        className={`h-5 w-5 transition ${
          isFavorite ? "text-primary-300 fill-primary-300" : "text-white"
        }`}
        variant={isFavorite ? "Bold" : "Outline"}
      />
    </button>
  );
};
