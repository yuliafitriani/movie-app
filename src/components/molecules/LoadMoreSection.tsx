type Props = {
  isLoading?: boolean;
  onLoadMore: () => void;
};

const LoadMoreSection = ({ isLoading, onLoadMore }: Props) => {
  return (
    <div className="relative w-full h-[469px] -mt-[369px] inset-0 bg-gradient-to-t from-black via-black/80 to-transparent">
      {/* Button */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <button
          onClick={onLoadMore}
          disabled={isLoading}
          className="
            flex h-[52px] w-[230px] items-center justify-center gap-2
            rounded-full border border-[#181D27]
            bg-black/60 backdrop-blur-[20px]
            text-base font-semibold text-white
            transition hover:bg-black/80
            disabled:opacity-50
          "
        >
          {isLoading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default LoadMoreSection;
