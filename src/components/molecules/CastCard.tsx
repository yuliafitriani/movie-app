type CastCardProps = {
  name: string;
  profilePath: string | undefined;
  character: string;
};

export const CastCard = ({ name, profilePath, character }: CastCardProps) => {
  return (
    <div className="flex items-center gap-3">
      {/* IMAGE */}
      <img
        src={profilePath}
        alt={name}
        className="h-[84px] w-[55px] rounded-lg object-cover"
      />

      {/* TEXT */}
      <div className="flex flex-1 flex-col">
        <p className="text-sm font-semibold leading-7 text-white">{name}</p>
        <p className="text-sm leading-7 text-[#A4A7AE]">{character}</p>
      </div>
    </div>
  );
};
