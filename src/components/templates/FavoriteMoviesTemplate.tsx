import type { FavoriteMovie } from "../../api/favoriteMovies";
import { Loader } from "../atoms/Loader";
import { ErrorState } from "../atoms/ErrorState";
import { FavoriteMovieList } from "../organisms/FavoriteMovieList";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  favoriteMovies?: FavoriteMovie[] | null;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  onRetry: () => void;
};

export const FavoriteMoviesTemplate = ({
  title,
  favoriteMovies,
  isLoading,
  isFetching,
  isError,
  onRetry,
}: Props) => {
  const navigate = useNavigate();
  if (isLoading) return <Loader />;

  if (isError)
    return (
      <ErrorState
        message="Failed to fetch favorite movies. Please try again."
        onRetry={onRetry}
      />
    );

  if (!favoriteMovies || favoriteMovies.length === 0)
    return (
      <section className="mt-10">
        <h1 className="mb-6 py-6 text-xl font-semibold text-left">{title}</h1>
        <div
          className="
            relative
            w-[300px] h-[358px]
            flex flex-col items-center justify-center
            gap-6
            mx-auto
          "
        >
          {/* Frame 53 */}
          <div className="flex flex-col items-center gap-4 w-[246px]">
            {/* Frame 55 (Image Wrapper) */}
            <div className="relative w-[200px] h-[200px]">
              {/* Frame 52 (Illustration Placeholder) */}
              <div
                className="
                  w-[153.84px] h-[170px]
                  opacity-50
                  mix-blend-luminosity
                "
              >
                <img
                  src="images/empty-favorite.svg"
                  alt="Empty Favorite"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Frame 56 (Text) */}
            <div className="flex flex-col gap-2 w-full text-center">
              <p className="text-white text-base font-semibold leading-[30px]">
                Data Empty
              </p>
              <p className="text-sm text-[#A4A7AE] leading-[28px]">
                You don&apos;t have a favorite movie yet
              </p>
            </div>
          </div>

          {/* Button Primary */}
          <button
            onClick={() => navigate("/")}
            className="
      w-full h-[52px]
      rounded-full
      bg-[#961200]
      flex items-center justify-center
      text-base font-semibold text-[#FDFDFD]
      transition hover:opacity-90 active:scale-95
    "
          >
            Explore Movies
          </button>
        </div>
      </section>
    );

  return (
    <section className="mt-10">
      <h1 className="mb-6 py-6 text-xl font-semibold text-left">
        {title} {isFetching && "(Refreshing...)"}
      </h1>

      {/* Mobile-first column layout */}
      <FavoriteMovieList movies={favoriteMovies} />
    </section>
  );
};
