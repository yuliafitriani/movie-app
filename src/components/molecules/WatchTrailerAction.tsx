import { useState } from "react";
import { PlayCircle } from "iconsax-reactjs";
import { TrailerModal } from "./TrailerModal";

type WatchTrailerActionProps = {
  youtubeKey?: string | null;
  buttonLabel?: string;
};

const WatchTrailerAction = ({
  youtubeKey,
  buttonLabel = "Watch Trailer",
}: WatchTrailerActionProps) => {
  const [open, setOpen] = useState(false);

  const isDisabled = !youtubeKey;

  const handleClick = () => {
    if (!youtubeKey) return;
    setOpen(true);
  };

  return (
    <>
      <button
        onClick={handleClick}
        disabled={isDisabled}
        className={`
          flex lg:h-[52px] h-[44px] items-center justify-center gap-2
          rounded-full font-semibold text-white w-full
          ${
            isDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#961200] hover:bg-[#7d0f00]"
          }
        `}
      >
        {buttonLabel}
        <PlayCircle className="h-5 w-5" variant="Bold" />
      </button>

      {open && youtubeKey && (
        <TrailerModal youtubeKey={youtubeKey} onClose={() => setOpen(false)} />
      )}
    </>
  );
};

export default WatchTrailerAction;
