import type { FavoriteMovie } from "../../api/favoriteMovies";
import { FavoriteMovieCard } from "../molecules/FavoriteMovieCard";

type Props = {
  movies: FavoriteMovie[];
};

export const FavoriteMovieList = ({ movies }: Props) => {
  return (
    <div className="flex w-full flex-col items-center gap-6">
      {movies.map((movie) => (
        <FavoriteMovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
