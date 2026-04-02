import type { SearchMovie } from "../../api/movies/search.api";
import { Loader } from "../atoms/Loader";
import { ErrorState } from "../atoms/ErrorState";
import { SearcMovieList } from "../organisms/SearchMovieList";

type Props = {
  title: string;
  searchMovies?: SearchMovie[] | null;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  onRetry: () => void;
};

export const SearchMoviesTemplate = ({
  title,
  searchMovies,
  isLoading,
  isFetching,
  isError,
  onRetry,
}: Props) => {
  if (isLoading) return <Loader />;

  if (isError)
    return (
      <ErrorState
        message="Failed to fetch favorite movies. Please try again."
        onRetry={onRetry}
      />
    );

  if (!searchMovies || searchMovies.length === 0)
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
                  src="./src/assets/images/empty-favorite.svg"
                  alt="Empty Favorite"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Frame 56 (Text) */}
            <div className="flex flex-col gap-2 w-full text-center">
              <p className="text-white text-base font-semibold leading-[30px]">
                Data Not Found
              </p>
              <p className="text-sm text-[#A4A7AE] leading-[28px]">
                Try other keywords
              </p>
            </div>
          </div>
        </div>
      </section>
    );

  return (
    <section className="mt-10">
      <h1 className="mb-6 py-6 text-xl font-semibold text-left">
        {title} {isFetching && "(Refreshing...)"}
      </h1>

      {/* Mobile-first column layout */}
      <SearcMovieList movies={searchMovies} />
    </section>
  );
};
