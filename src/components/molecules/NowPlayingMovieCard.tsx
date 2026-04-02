import type { NowPlayingMovies } from "../../api/movies/nowPlaying.api";
import { useNavigate } from "react-router-dom";

type Props = {
  nowPlayingMovies: NowPlayingMovies;
};

export const NowPlayingMovieCard = ({ nowPlayingMovies }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-43.25 lg:w-[216px] transform transition duration-300
    hover:scale-105 cursor-pointer"
      onClick={() => navigate(`/movie/${nowPlayingMovies.id}`)}
    >
      <img
        className="rounded-xl mb-3 w-43.25 h-66.5  lg:w-[216px] lg:h-[321px]"
        src={`https://image.tmdb.org/t/p/original/${nowPlayingMovies.posterPath}`}
      />
      <p className="font-medium text-sm truncate text-left">
        {nowPlayingMovies.title}
      </p>
      <p className="text-xs text-left">
        ⭐ {nowPlayingMovies.rating.toFixed(1)}/10
      </p>
    </div>
  );
};
