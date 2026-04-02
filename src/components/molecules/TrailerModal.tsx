import { CloseSquare } from "iconsax-reactjs";

type Props = {
  youtubeKey: string;
  onClose: () => void;
};

export const TrailerModal = ({ youtubeKey, onClose }: Props) => {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/80">
      {/* VIDEO */}
      <div className="w-full px-4 lg:max-w-[50%] aspect-video rounded-xl overflow-hidden">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="text-white z-50 w-full items-end justify-items-end"
        >
          <CloseSquare className="h-6 w-6" />
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${youtubeKey}?autoplay=1`}
          title="Movie Trailer"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
};
