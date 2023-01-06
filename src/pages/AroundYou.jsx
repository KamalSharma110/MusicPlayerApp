import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { playerSliceActions } from "../store/store";

import SongCard from '../components/SongCard.jsx';

const AroundYou = () => {
  const [countryCode, setCountryCode] = useState(null);
  const [countryChartsData, setCountryChartsData] = useState([]);
  const dispatch = useDispatch();

  dispatch(playerSliceActions.setCurrentSongs(countryChartsData));

  useEffect(() => {
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
      setCountryCode(data.country?.code);
    };

    fetchCountryCode();
  }, []);

  useEffect(() => {
    const fetchChartsByCountry = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "8687aad68cmsh68a2c535dcda472p199339jsne35acd458307",
          "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
        },
      };

      const response = await fetch(
        `https://shazam-core.p.rapidapi.com/v1/charts/country?country_code=${countryCode}`,
        options
      );
      const data = await response.json();
      localStorage.setItem("indianChartsData", JSON.stringify(data));

      setCountryChartsData(data.map((item, index) => ({ ...item, index })));
    };

    const indianChartsData = JSON.parse(
      localStorage.getItem("indianChartsData")
    );

    if (!indianChartsData && countryCode) fetchChartsByCountry();

    setCountryChartsData(
      indianChartsData?.map((item, index) => ({ ...item, index }))
    );
  }, [countryCode]);

  return (
    <section className="col-12 col-lg-7 mt-4">
      <h4 className="row text-white text-center my-3">
        Around You
      </h4>

      <div className="row g-4">
        {countryChartsData?.map((item) => {
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
