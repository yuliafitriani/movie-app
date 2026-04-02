import type { NowPlayingMovies } from "../../api/movies/nowPlaying.api";
import { Loader } from "../atoms/Loader";
import { ErrorState } from "../atoms/ErrorState";
import { NowPlayingMovieList } from "../organisms/NowPlayingMovieList";
import LoadMoreSection from "../molecules/LoadMoreSection";

type Props = {
  title: string;
  nowPlayingMovies?: NowPlayingMovies[] | null;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  isLoadingMore?: boolean;
  onLoadMore?: () => void;
  onRetry: () => void;
};

export const NowPlayingMoviesTemplate = ({
  title,
  nowPlayingMovies,
  isLoading,
  isFetching,
  isError,
  isLoadingMore,
  onLoadMore,
  onRetry,
}: Props) => {
  if (isLoading) return <Loader />;

  if (isError) {
    return (
      <ErrorState
        message="Failed to fetch movie. Please try again."
        onRetry={onRetry}
      />
    );
  }

  return (
    <section className="mt-10">
      <h1 className="mb-6 text-left text-xl font-semibold">
        {title} {isFetching && "(Refreshing...)"}
      </h1>

      <div className="grid grid-cols-2 gap-6 lg:grid-cols-5">
        <NowPlayingMovieList nowPlayingMovies={nowPlayingMovies ?? []} />
      </div>

      {/* Load More */}
      {onLoadMore && (
        <LoadMoreSection isLoading={isLoadingMore} onLoadMore={onLoadMore} />
      )}
    </section>
  );
};
