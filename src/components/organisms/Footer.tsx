import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="mt-10">
      <div className="border border-neutral-600 w-full -p-[16px] left-0 bottom-0"></div>
      <div className="text-neutral-600 text-xs text-left gap-2 flex flex-col lg:flex-row my-4">
        <div>
          <img
            src="src/assets/images/logo.svg"
            alt="Movie Logo"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="lg:text-right lg:w-full">
          Copyright © 2026 Movie Explorer
        </div>
      </div>
    </footer>
  );
};

export default Footer;
