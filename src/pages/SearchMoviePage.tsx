import { useSearchParams } from "react-router-dom";
import { SearchMoviesTemplate } from "../components/templates/SearchMoviesTemplate";
import { useSearchMovies } from "../hooks/useSearchMovie";

const SearchMoviesPage = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("q") ?? "";

  const query = useSearchMovies({
    query: keyword,
    page: 1,
  });

  return (
    <SearchMoviesTemplate
      title={keyword ? `Search results for "${keyword}"` : "Search Movies"}
      searchMovies={query.data}
      isLoading={query.isLoading}
      isFetching={query.isFetching}
      isError={query.isError}
      onRetry={() => query.refetch()}
    />
  );
};

export default SearchMoviesPage;
