import { genres } from "../constants.js";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playerSliceActions } from "../store/store";
import { useGetChartsByGenreQuery } from "../services/shazamCore.js";

import SongCard from "../components/SongCard";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Discover = () => {
  const currentSongs = useSelector(state => state.player.currentSongs);
  const dispatch = useDispatch();
  const ref = useRef();
  const [genre, setGenre] = useState({ title: "Pop", value: "POP" });
  const { data, isFetching, error } = useGetChartsByGenreQuery(genre.value);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });

    dispatch(
      playerSliceActions.setCurrentSongs(
        data?.map((item, index) => ({ ...item, index }))
      )
    );
  }, [dispatch, data]);


  const genreClickHandler = (event) => {
    event.preventDefault();
    const genreCode = event.target.getAttribute("data-value");
    setGenre({ title: event.target.textContent, value: genreCode });
  };

  return (
    <section className="col-12 col-lg-6 col-xl-7 mt-5 mt-lg-4" ref={ref}>
      <div className="row mt-3 mt-lg-0">
        <SearchBar />
      </div>

      <div className="mb-3 row justify-content-sm-between justify-content-center align-items-center">
        <h4 className="col-12 col-sm-auto text-white text-center my-3">
          Discover
        </h4>

        <div className="dropdown col-auto">
          <button
            type="button"
            data-bs-toggle="dropdown"
            className="btn btn-dark dropdown-toggle"
          >
            {genre.title} &nbsp; &nbsp;
          </button>
          <ul
            className="dropdown-menu"
            data-bs-theme="dark"
            onClick={(event) => genreClickHandler(event)}
          >
            {genres.map((genre, index) => (
              <li key={"g" + index}>
                <a href="/" className="dropdown-item" data-value={genre.value}>
                  {genre.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="row g-2 g-sm-3 g-md-4">
        {isFetching && <Loader/>}
        {error && <Error/>}
        {currentSongs?.map((item) => {
          if (!item.artists) return "";

          return (
            <SongCard
              key={item.key}
              title={item.title}
              subtitle={item.subtitle}
              image={item.images?.coverart}
              songData={item}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Discover;
