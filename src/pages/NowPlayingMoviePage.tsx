import { NowPlayingMoviesTemplate } from "../components/templates/NowPlayingMovieTemplate";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";

const NowPlayingMoviesPage = () => {
  const query = useNowPlayingMovies();

  const movies = query.data?.pages.flat() ?? [];

  return (
    <NowPlayingMoviesTemplate
      title="New Release"
      nowPlayingMovies={movies}
      isLoading={query.isLoading}
      isFetching={query.isFetching}
      isError={query.isError}
      isLoadingMore={query.isFetchingNextPage}
      onLoadMore={() => query.fetchNextPage()}
      onRetry={() => query.refetch()}
    />
  );
};

export default NowPlayingMoviesPage;
