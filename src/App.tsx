import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/organisms/Header";
import Hero from "./components/organisms/Hero";
import Footer from "./components/organisms/Footer";
import PopularMoviesPage from "./pages/PopularMoviePage";
import NowPlayingMoviesPage from "./pages/NowPlayingMoviePage";
import DetailMoviePage from "./pages/DetailMoviePage";
import FavoriteMoviesPage from "./pages/FavoriteMoviesPage";
import SearchMoviesPage from "./pages/SearchMoviePage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <PopularMoviesPage />
              <NowPlayingMoviesPage />
            </>
          }
        />

        <Route path="/movie/:id" element={<DetailMoviePage />} />
        <Route path="/favorite" element={<FavoriteMoviesPage />} />
        <Route path="/search" element={<SearchMoviesPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
