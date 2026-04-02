import type { PopularMovies } from "../../api/movies/popular.api";
import { PopularMovieCard } from "../molecules/PopularMovieCard";
// import { showTopTenSignal } from "../../signals/ui.signal";

type Props = {
  popularMovies: PopularMovies[];
};

export const PopularMovieList = ({ popularMovies }: Props) => {
  // const visible = showTopTenSignal.value
  //   ? popularMovies.slice(1)
  //   : popularMovies;
  // const visible = popularMovies;
  return (
    <>
      {popularMovies.map((movie) => (
        <div key={movie.id} className="min-w-45 shrink-0">
          <PopularMovieCard key={movie.id} popularMovies={movie} />
        </div>
      ))}
    </>
  );
};
