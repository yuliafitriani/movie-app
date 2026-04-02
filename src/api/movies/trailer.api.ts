import { apiClient } from "../axios";

export type MovieTrailer = {
  name: string;
  key: string;
  site: string;
  official: boolean;
};

type TMDBTrailer = {
  name: string;
  key: string;
  site: string;
  type: string;
  official: boolean;
};

type GetMovieTrailerResponse = {
  id: number;
  results: TMDBTrailer[];
};

export const getMovieTrailer = async (
  movieId: number
): Promise<MovieTrailer | null> => {
  const res = await apiClient.get<GetMovieTrailerResponse>(
    `/movie/${movieId}/videos`
  );

  // 1️⃣ filter Trailer + YouTube
  const trailers = res.data.results.filter(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );

  // 2️⃣ prefer official trailer
  const officialTrailer =
    trailers.find((video) => video.official) ?? trailers[0];

  if (!officialTrailer) return null;

  return {
    name: officialTrailer.name,
    key: officialTrailer.key,
    site: officialTrailer.site,
    official: officialTrailer.official,
  };
};
