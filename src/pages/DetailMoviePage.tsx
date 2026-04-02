import { useParams } from "react-router-dom";
import { DetailMovieTemplate } from "../components/templates/DetailMovieTemplate";
import { useMovieDetail } from "../hooks/useDetailMovie";
import { useMovieCredits } from "../hooks/useMovieCredits";
import { useTrailerMovie } from "../hooks/useTrailerMovie";

const DetailMoviePage = () => {
  const { id } = useParams<{ id: string }>();
  const movieId = Number(id);

  const query = useMovieDetail({ id: movieId });
  const casts = useMovieCredits({ movieId: movieId });
  const trailer = useTrailerMovie({ movieId: movieId });

  return (
    <DetailMovieTemplate
      movie={query.data}
      casts={casts.data}
      trailer={trailer.data}
      isLoading={query.isLoading}
      isError={query.isError}
      onRetry={() => query.refetch()}
    />
  );
};

export default DetailMoviePage;
