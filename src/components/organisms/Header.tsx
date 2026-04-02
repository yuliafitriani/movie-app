import { Search, Menu, X, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && search.trim()) {
      navigate(`/search?q=${encodeURIComponent(search.trim())}`);
      setMobileSearchOpen(false);
      setSearch("");
    }
  };

  /* ================= MOBILE SEARCH OVERLAY ================= */
  {
    /* Overlay Layer */
  }
  if (mobileSearchOpen) {
    return (
      <div className="fixed inset-0 z-[100] bg-black lg:hidden">
        {/* Header */}
        <div className="flex h-16 items-center gap-4 px-4">
          <button onClick={() => setMobileSearchOpen(false)} aria-label="Back">
            <ArrowLeft className="h-6 w-6 text-white" />
          </button>

          <div className="flex h-11 flex-1 items-center gap-2 rounded-xl border border-[#252B37] bg-black/60 px-4 backdrop-blur-[20px]">
            <Search className="h-5 w-5 text-[#717680]" />
            <input
              autoFocus
              type="text"
              placeholder="Search Movie"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-[#717680]"
            />
          </div>
        </div>

        {/* Optional Content (Suggestions / Recent) */}
        <div className="px-4 pt-4 text-sm text-gray-400">
          Start typing to search movies
        </div>
      </div>
    );
  }
  /* ========================================================= */

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${scrolled ? "bg-black/60 backdrop-blur-[40px]" : "bg-transparent"}
        `}
      >
        <div className="mx-auto h-16 flex items-center justify-between px-4 lg:max-w-[1280px]">
          {/* Left */}
          <div className="flex items-center gap-10 text-white">
            <img
              src="./src/assets/images/logo.svg"
              alt="Movie Logo"
              className="h-8 cursor-pointer"
              onClick={() => navigate("/")}
            />

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-12">
              <li>
                <a
                  href="/"
                  className="text-md text-white no-underline hover:text-primary-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/favorite"
                  className="text-md text-white no-underline hover:text-primary-300"
                >
                  Favorites
                </a>
              </li>
            </ul>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4 text-white">
            {/* Desktop Search */}
            <div className="hidden lg:flex items-center gap-2 rounded-2xl border border-[#181D27] bg-black/60 px-4 h-11 w-[260px]">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search movie"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleSearchKeyDown}
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
            </div>

            {/* Mobile Search Icon */}
            <button
              className="lg:hidden"
              aria-label="Search"
              onClick={() => setMobileSearchOpen(true)}
            >
              <Search className="h-6 w-6" />
            </button>

            {/* Hamburger */}
            <button
              className="lg:hidden"
              aria-label="Menu"
              onClick={() => setOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black text-white">
          <div className="flex items-center justify-between h-16 px-4">
            <img
              src="./src/assets/images/logo.svg"
              alt="Movie Logo"
              className="h-8"
            />
            <button onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-4 px-4 pt-6 text-left">
            <a href="/" onClick={() => setOpen(false)}>
              Home
            </a>
            <a href="/favorite" onClick={() => setOpen(false)}>
              Favorites
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
