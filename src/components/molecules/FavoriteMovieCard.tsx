import type { FavoriteMovie } from "../../api/favoriteMovies";
import { FavoriteButton } from "../molecules/FavoriteButton";
import WatchTrailerAction from "./WatchTrailerAction";
import { useNavigate } from "react-router-dom";

type Props = {
  movie: FavoriteMovie;
  onToggleFavorite?: () => void;
  isFavorite?: boolean;
};

export const FavoriteMovieCard = ({ movie }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      className="
        flex flex-col gap-
        lg:flex-row lg:items-start lg:justify-between
        lg:w-[1280px] lg:gap-[63px] lg:px-4
      "
    >
      {/* Left Content */}
      <div
        className="
          flex gap-4
          lg:gap-6 lg:w-[978px]
        "
        onClick={() => navigate(`/movie/${movie.id}`)}
      >
        {/* Image */}
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.posterPath}`}
          alt={movie.title}
          className="
            h-[156px] w-[104px] rounded-lg object-cover
            lg:h-[270px] lg:w-[182px] lg:rounded-xl
          "
        />

        {/* Text Content */}
        <div
          className="
            flex flex-col gap-2
            lg:flex-1 lg:gap-2
            text-left
          "
        >
          {/* Title */}
          <h3
            className="
              line-clamp-2 text-base font-bold leading-[30px] text-white
              lg:text-[24px] lg:leading-[36px]
            "
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            {movie.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 text-neutral-50">
            ⭐
            <span
              className="
                text-sm
                lg:text-lg lg:leading-[32px]
              "
            >
              {movie.rating.toFixed(1)}/10
            </span>
          </div>

          {/* Overview */}
          <p
            className="
              line-clamp-2 text-sm leading-[28px] text-[#A4A7AE]
              lg:text-base lg:leading-[30px]
            "
          >
            {movie.overview}
          </p>

          {/* Actions (LG inline) */}
          <div className="hidden lg:flex items-center gap-4 lg:max-w-[220px]">
            <WatchTrailerAction youtubeKey={movie.trailer} />
          </div>
        </div>
      </div>

      {/* Right Actions */}
      <div
        className="
          flex items-center gap-4 mt-4
          lg:flex-col lg:gap-0
        "
      >
        {/* Mobile Watch */}
        <div className="lg:hidden w-full ">
          <WatchTrailerAction youtubeKey={movie.trailer} />
        </div>

        {/* Favorite */}
        <FavoriteButton movieId={movie.id} />
      </div>
    </div>
  );
};
