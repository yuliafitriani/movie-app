import type { MovieCast } from "../../api/movies/credits.api";
import { CastCard } from "../molecules/CastCard";

type Props = {
  casts: MovieCast[];
};

export const CastDetailMovieList = ({ casts }: Props) => {
  return (
    <>
      {casts.map((cast, index) => (
        <div key={`${cast.name}-${index}`} className="">
          <CastCard
            name={cast.name}
            profilePath={
              cast.profilePath
                ? `https://image.tmdb.org/t/p/w185${cast.profilePath}`
                : ".images/placeholder-avatar.png"
            }
            character={cast.character}
          />
        </div>
      ))}
    </>
  );
};
