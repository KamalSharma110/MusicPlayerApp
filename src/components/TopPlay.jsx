import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import TopPlayCard from "./TopPlayCard";

import "swiper/css";
import "swiper/css/free-mode";
import { playerSliceActions } from "../store/store";

const TopPlay = () => {
  const widgetSongs = useSelector((state) => state.widgetSongs);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    let globalChartsData = JSON.parse(localStorage.getItem("globalChartsData"));

    globalChartsData = globalChartsData.slice(0, 5);

    dispatch(
      playerSliceActions.setWidgetSongs(
        globalChartsData?.map((item, index) => ({ ...item, index }))
      )
    );
  }, [dispatch]);

  const getSongs = (songRequested) => {
    const arr = [];
    for (let i = 0; i < widgetSongs?.length; i++) {
      if (!widgetSongs[i].artists) continue;
      if (songRequested === true)
        arr.push(
          <TopPlayCard song={widgetSongs[i]} key={widgetSongs[i].key} />
        );
      else
        arr.push(
          <SwiperSlide
            key={widgetSongs[i].key}
            style={{ width: "25%", height: "auto" }}
            className="rounded-circle animate-slideright"
          >
            <img
              src={widgetSongs[i].images.background}
              alt="name"
              className="rounded-circle"
              width="100px"
              onClick={() =>
                history.push(
                  `/artist-details/${widgetSongs[i].artists[0].adamid}`
                )
              }
              style={{ cursor: "pointer" }}
            />
          </SwiperSlide>
        );
    }
    return arr;
  };

  return (
    <section className="text-white col-12 col-lg-3 position-fixed top-0 end-0">
      <div className="mt-3">
        <h4>Top Charts</h4>
        <ol
          className="list-group list-group-numbered"
          onClick={() => dispatch(playerSliceActions.toggleWidgetActive(true))}
        >
          {getSongs(true)}
        </ol>
      </div>
      <div className="mt-3">
        <h4>Top Artists</h4>
        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {getSongs(false)}
        </Swiper>
      </div>
    </section>
  );
};

export default TopPlay;
