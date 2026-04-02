import type { NowPlayingMovies } from "../../api/movies/nowPlaying.api";
import { NowPlayingMovieCard } from "../molecules/NowPlayingMovieCard";

type Props = {
  nowPlayingMovies: NowPlayingMovies[];
};

export const NowPlayingMovieList = ({ nowPlayingMovies }: Props) => {
  return (
    <>
      {nowPlayingMovies.map((movie) => (
        <div key={movie.id} className="min-w-45 shrink-0">
          <NowPlayingMovieCard nowPlayingMovies={movie} />
        </div>
      ))}
    </>
  );
};
