import { genres } from "../constants.js";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SongCard from "../components/SongCard";
import { playerSliceActions } from "../store/store";

let genre = 'All';
const Discover = () => {
  const dispatch = useDispatch();
  const [discoverData, setDiscoverData] = useState([]);

  dispatch(playerSliceActions.setCurrentSongs(discoverData));

  useEffect(() => {
    const fetchWorldCharts = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "8687aad68cmsh68a2c535dcda472p199339jsne35acd458307",
          "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
        },
      };

      const response = await fetch(
        "https://shazam-core.p.rapidapi.com/v1/charts/world",
        options
      );
      const data = await response.json();
      localStorage.setItem("globalChartsData", JSON.stringify(data));

      setDiscoverData(data.map((item, index) => ({ ...item, index })));
    };

    const globalChartsData = JSON.parse(
      localStorage.getItem("globalChartsData")
    );

    if (!globalChartsData) fetchWorldCharts();

    setDiscoverData(
      globalChartsData?.map((item, index) => ({ ...item, index }))
    );
  }, [dispatch, setDiscoverData]);

  const genreClickHandler = async (event) => {
    event.preventDefault();

    const genreCode = event.target.getAttribute("data-value");
    genre = event.target.textContent;

    let data = JSON.parse(
      localStorage.getItem(`genreCharts_${genreCode}`)
    );

    if (!data) {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "8687aad68cmsh68a2c535dcda472p199339jsne35acd458307",
          "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
        },
      };

      const response = await fetch(
        `https://shazam-core.p.rapidapi.com/v1/charts/genre-world?genre_code=${genreCode}`,
        options
      );

      data = await response.json();
      localStorage.setItem(`genreCharts_${genreCode}`, JSON.stringify(data));
    }

    setDiscoverData(data.map((item, index) => ({ ...item, index })));
  };

  return (
    <section className="col-12 col-lg-7 mt-4">
      <div className="row justify-content-sm-between justify-content-center align-items-center">
        <h4 className="col-12 col-sm-auto text-white text-center my-3">
          Discover
        </h4>

        <div className="dropdown col-auto">
          <button
            type="button"
            data-bs-toggle="dropdown"
            className="btn btn-dark dropdown-toggle"
          >
            {genre} &nbsp; &nbsp;
          </button>
          <ul
            className="dropdown-menu"
            data-bs-theme="dark"
            onClick={(event) => genreClickHandler(event)}
          >
            {genres.map((genre) => (
              <li>
                <a href="/" className="dropdown-item" data-value={genre.value}>
                  {genre.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>


      <div className="row g-4">
        {discoverData?.map((item) => {
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
