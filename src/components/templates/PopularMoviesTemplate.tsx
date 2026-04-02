import type { PopularMovies } from "../../api/movies/popular.api";
import { Loader } from "../atoms/Loader";
import { ErrorState } from "../atoms/ErrorState";
import { PopularMovieList } from "../organisms/PopularMovieList";
import { useRef, useEffect } from "react";
import { ChevronRight } from "lucide-react";

type Props = {
  title: string;
  popularMovies?: PopularMovies[] | null;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  onRetry: () => void;
};

export const PopularMoviesTemplate = ({
  title,
  popularMovies,
  isLoading,
  isFetching,
  isError,
  onRetry,
}: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  const scrollRight = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const isAtEnd =
      slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10;

    slider.scrollTo({
      left: isAtEnd ? 0 : slider.scrollLeft + 320,
      behavior: "smooth",
    });
  };

  // ▶️ Auto slide
  useEffect(() => {
    intervalRef.current = setInterval(scrollRight, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const pauseAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const resumeAutoSlide = () => {
    intervalRef.current = setInterval(scrollRight, 3000);
  };

  if (isLoading) return <Loader />;

  if (isError)
    return (
      <ErrorState
        message="Failed to fetch movie. Please try again."
        onRetry={onRetry}
      />
    );

  return (
    <section className="relative">
      <h1 className="text-xl font-semibold mb-6 text-left">
        {title} {isFetching && "(Refreshing...)"}
      </h1>

      {/* Slider */}
      <div
        ref={sliderRef}
        onMouseEnter={pauseAutoSlide}
        onMouseLeave={resumeAutoSlide}
        className="
          flex gap-6 overflow-x-auto
          scroll-smooth scrollbar-hide
          pr-14
        "
      >
        <PopularMovieList popularMovies={popularMovies ?? []} />
      </div>

      {/* Manual right arrow */}
      <button
        onClick={scrollRight}
        className="
          absolute right-0 top-1/2 -translate-y-1/2
          h-10 w-10 rounded-full
          bg-black/60 backdrop-blur
          flex items-center justify-center
          hover:bg-black/80 transition
        "
        aria-label="Scroll right"
      >
        <ChevronRight className="text-white" />
      </button>
    </section>
  );
};
