import { useNavigate } from "react-router-dom";
import type { PopularMovies } from "../../api/movies/popular.api";

type Props = {
  popularMovies: PopularMovies;
};

export const PopularMovieCard = ({ popularMovies }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      className="block w-43.25 lg:w-[216px] transform transition duration-300
    hover:scale-102 cursor-pointer"
      onClick={() => navigate(`/movie/${popularMovies.id}`)}
    >
      <img
        className="rounded-xl mb-3 w-43.25 h-66.5 lg:w-[216px] lg:h-[321px]"
        src={`https://image.tmdb.org/t/p/original/${popularMovies.posterPath}`}
      />
      <p className="font-medium text-sm truncate text-left">
        {popularMovies.title}
      </p>
      <p className="text-xs text-left">
        ⭐ {popularMovies.rating.toFixed(1)}/10
      </p>
    </div>
  );
};
