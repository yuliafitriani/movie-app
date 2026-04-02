type StatCardProps = {
  label: string;
  value: string;
  icon: string;
};

export const StatCard = ({ label, value, icon }: StatCardProps) => {
  return (
    <div className="flex h-[120px] flex-1 flex-col items-center justify-center gap-2 rounded-2xl border border-[#252B37] bg-black">
      <img className="text-xl" src={`.images/${icon}`} />
      <p className="text-xs text-[#D5D7DA]">{label}</p>
      <p className="text-lg font-semibold text-white">{value}</p>
    </div>
  );
};
