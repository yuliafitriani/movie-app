import { apiClient } from "../axios";

export type MovieCast = {
  name: string;
  profilePath: string | null;
  character: string;
};

export type GetMovieCreditsParams = {
  movieId: number;
  // signal?: AbortSignal;
};

type TMDBCast = {
  name: string;
  profile_path: string | null;
  character: string;
};

type GetMovieCreditsResponse = {
  id: number;
  cast: TMDBCast[];
};

export const getMovieCredits = async ({
  movieId,
}: // signal,
GetMovieCreditsParams): Promise<MovieCast[]> => {
  const res = await apiClient.get<GetMovieCreditsResponse>(
    `/movie/${movieId}/credits`
  );

  return res.data.cast.map((cast) => ({
    name: cast.name,
    profilePath: cast.profile_path,
    character: cast.character,
  }));
};
