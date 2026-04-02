import { useQuery } from "@tanstack/react-query";
import {
  movieDetailQueryKey,
  movieDetailQueryFn,
} from "../queries/movies/detail.query";

export type UseMovieDetailOptions = {
  id: number;
};

export const useMovieDetail = ({ id }: UseMovieDetailOptions) => {
  return useQuery({
    queryKey: movieDetailQueryKey.detail(id),
    queryFn: movieDetailQueryFn,
    enabled: !!id,
  });
};
