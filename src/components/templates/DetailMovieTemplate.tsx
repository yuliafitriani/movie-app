import { StatCard } from "../molecules/StatCard";
import { Calendar } from "iconsax-reactjs";
import { ErrorState } from "../atoms/ErrorState";
import { Loader } from "../atoms/Loader";
import { CastDetailMovieList } from "../organisms/CastDetailMovieList";
// import { useState } from "react";
import { FavoriteButton } from "../molecules/FavoriteButton";
import WatchTrailerAction from "../molecules/WatchTrailerAction";

type MovieDetail = {
  id: number;
  title: string;
  overview: string;
  rating: number;
  releaseDate: string;
  backdropPath: string;
  posterPath: string;
  runtime: number;
};

type MovieCast = {
  name: string;
  profilePath: string | null;
  character: string;
};

type MovieTrailer = {
  name: string;
  key: string;
  site: string;
  official: boolean;
};

type Props = {
  movie?: MovieDetail | null;
  casts?: MovieCast[] | null;
  trailer?: MovieTrailer | null;
  isLoading: boolean;
  isError: boolean;
  onRetry: () => void;
};

export const FormatDateID = (date: string) =>
  new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

export const DetailMovieTemplate = ({
  movie,
  casts,
  trailer,
  isLoading,
  isError,
  onRetry,
}: Props) => {
  // const [openTrailer, setOpenTrailer] = useState(false);
  if (isLoading) return <Loader />;

  if (isError || !movie) {
    return (
      <ErrorState
        message="Failed to fetch movie detail. Please try again."
        onRetry={onRetry}
      />
    );
  }

  return (
    <section className="px-4 pb-10 pt-56 flex flex-col gap-6">
      <div className="w-full absolute left-0 top-0 -z-1">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdropPath}`}
          alt={movie.title}
          className="h-[345px] lg:h-[810px] lg:max-w-[1536px] w-full object-cover lg:w-full lg:object-cover mx-auto"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:flex w-full max-w-[1280px] gap-8 mx-auto">
        {/* POSTER */}
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.posterPath}`}
          alt={movie.title}
          className="w-[260px] h-[384px] rounded-xl object-cover flex-shrink-0"
        />

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-6 flex-1">
          {/* TITLE + DATE + FAVORITE */}
          <div className="flex justify-between gap-8">
            <div className="flex flex-col gap-4 flex-1">
              <h1 className="text-[40px] font-bold leading-[56px] tracking-[-0.02em] text-left text-white">
                {movie.title}
              </h1>

              <div className="flex items-center gap-2 text-white">
                <Calendar className="h-6 w-6" />
                <span className="text-base">
                  {FormatDateID(movie.releaseDate)}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            {/* ACTION BUTTON */}
            {trailer?.key && (
              <div className="lg:w-[220px]">
                <WatchTrailerAction youtubeKey={trailer.key} />
              </div>
            )}

            {/* FAVORITE BUTTON */}
            <FavoriteButton movieId={movie.id} />
          </div>

          {/* STATS */}
          <div className="flex gap-5">
            <StatCard
              label="Rating"
              value={`${movie.rating.toFixed(1)}/10`}
              icon="Star.svg"
            />
            <StatCard label="Genre" value="Action" icon="Video.svg" />
            <StatCard label="Age Limit" value="13+" icon="emoji-happy.svg" />
          </div>
        </div>
      </div>

      {/* TOP INFO */}
      <div className="flex gap-4 lg:hidden">
        {/* POSTER */}
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.posterPath}`}
          alt={movie.title}
          className="h-[171px] w-[116px] rounded-xl object-cover"
        />

        {/* TITLE + DATE */}
        <div className="flex flex-1 flex-col gap-1">
          <h1 className="text-[20px] font-bold leading-[34px] text-white text-left">
            {movie.title}
          </h1>

          <div className="flex items-center gap-1 text-sm text-white">
            <span>
              <Calendar className="h-5 w-5" />
            </span>
            <span>{FormatDateID(movie.releaseDate)}</span>
          </div>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex gap-4 lg:hidden">
        {trailer?.key && <WatchTrailerAction youtubeKey={trailer.key} />}

        <FavoriteButton movieId={movie.id} />
      </div>

      {/* STATS */}
      <div className="flex gap-3 lg:hidden">
        <StatCard
          label="Rating"
          value={movie.rating.toFixed(1)}
          icon="Star.svg"
        />
        <StatCard label="Genre" value="Action" icon="Video.svg" />
        <StatCard label="Age" value="13+" icon="emoji-happy.svg" />
      </div>

      {/* OVERVIEW */}
      <div className="flex flex-col gap-2">
        <h2 className="text-[20px] font-bold text-white text-left">Overview</h2>
        <p className="text-sm leading-7 text-[#A4A7AE] text-left">
          {movie.overview}
        </p>
      </div>

      <div className="flex flex-col gap-4 text-left">
        <h2 className="text-[20px] font-bold text-white text-left">
          Cast & Crew
        </h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <CastDetailMovieList casts={casts ?? []} />
        </div>
      </div>
    </section>
  );
};
