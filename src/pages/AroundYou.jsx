import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playerSliceActions } from "../store/store";
import { useGetChartsByCountryQuery } from "../services/shazamCore";

import SongCard from "../components/SongCard.jsx";
import Loader from "../components/Loader";
import Error from "../components/Error";

let countryName;
const AroundYou = () => {
  const currentSongs = useSelector(state => state.player.currentSongs);
  const [countryCode, setCountryCode] = useState(null);
  const dispatch = useDispatch();
  const ref = useRef();

  const { data, isFetching, error } = useGetChartsByCountryQuery(
    countryCode || "IN"
  ); //this hook will not be executed on every re-render because redux cache the api calls and 
  //thus useEffect will not run on every re-render even though it has 'data' as its dependency

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });

    const fetchCountryCode = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "8687aad68cmsh68a2c535dcda472p199339jsne35acd458307",
          "X-RapidAPI-Host": "ip-geo-location.p.rapidapi.com",
        },
      };

      const response = await fetch(
        "https://ip-geo-location.p.rapidapi.com/ip/check?format=json",
        options
      );
      const data = await response.json();

      if (!countryName) countryName = data.country?.name;
      setCountryCode(data.country?.code);
    };

    fetchCountryCode();

    dispatch(
      playerSliceActions.setCurrentSongs(
        data?.map((item, index) => ({ ...item, index }))
      )
    );
  }, [dispatch, data]);


  return (
    <section className="col-12 col-lg-6 col-xl-7 mt-5 mt-lg-4" ref={ref}>
      <h4 className="text-white text-center text-sm-start my-3">
        {`Around You ${countryName ? "(" + countryName + ")" : ""}`}
      </h4>

      <div className="row g-2 g-sm-3 g-md-4">
        {isFetching && <Loader title="Loading Top Songs Around You..." />}
        {error && <Error />}
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

export default AroundYou;
