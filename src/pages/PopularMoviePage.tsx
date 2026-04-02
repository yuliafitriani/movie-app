import { PopularMoviesTemplate } from "../components/templates/PopularMoviesTemplate";
import { usePopularMovies } from "../hooks/usePopularMovies";

const PopularMoviesPage = () => {
  const query = usePopularMovies({ page: 1 });
  return (
    <PopularMoviesTemplate
      title="Trending Now"
      popularMovies={query.data}
      isLoading={query.isLoading}
      isFetching={query.isFetching}
      isError={query.isError}
      onRetry={() => query.refetch()}
    />
  );
};

export default PopularMoviesPage;
