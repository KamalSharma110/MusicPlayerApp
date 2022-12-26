// import { genres } from "../constants.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SongCard from "../components/SongCard";
import { playerSliceActions } from "../store/store";

let discoverData = JSON.parse(localStorage.getItem("globalChartsData"));
const Discover = () => {
  const dispatch = useDispatch();

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
      console.log(data);
    };

    const globalChartsData = localStorage.getItem("globalChartsData");

    if (!globalChartsData) fetchWorldCharts();
    else discoverData = JSON.parse(globalChartsData);

    dispatch(playerSliceActions.setCurrentSongs(globalChartsData));
  }, [dispatch]);

  // fetchWorldCharts();

  return (
    <section className="container">
      <div className="row justify-content-sm-between justify-content-center align-items-center">
        <h2 className="col-12 col-sm-auto text-white text-center my-3">
          Discover
        </h2>

        <div className="dropdown col-auto">
          <button
            type="button"
            data-bs-toggle="dropdown"
            className="btn btn-dark dropdown-toggle"
          >
            Pop &nbsp; &nbsp;
          </button>
          <ul className="dropdown-menu" data-bs-theme="dark">
            {/* {genres.map((genre) => <li><a href="#" className="dropdown-item">{genre.title}</a></li>)} */}
          </ul>
        </div>
      </div>

      <div className="row g-4">
        {discoverData?.map((item) => (
          <SongCard
            key={item.key}
            title={item.title}
            subtitle={item.subtitle}
            image={item.images?.coverart}
            songData={item}
          />
        ))}
      </div>
    </section>
  );
};

export default Discover;
