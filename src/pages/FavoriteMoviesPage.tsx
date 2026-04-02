import { FavoriteMoviesTemplate } from "../components/templates/FavoriteMoviesTemplate";
import { useFavoriteMovies } from "../hooks/useFavoriteMovies";
import { useAccount } from "../queries/account.query";

const FavoriteMoviesPage = () => {
  const { data: account } = useAccount();
  const query = useFavoriteMovies(account?.id);

  return (
    <FavoriteMoviesTemplate
      title="Favorites"
      favoriteMovies={query.data}
      isLoading={query.isLoading}
      isFetching={query.isFetching}
      isError={query.isError}
      onRetry={() => query.refetch()}
    />
  );
};

export default FavoriteMoviesPage;
