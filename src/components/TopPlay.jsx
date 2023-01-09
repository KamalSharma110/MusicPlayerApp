import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { playerSliceActions } from "../store/store";
import { useGetWorldChartsQuery } from "../services/shazamCore";
import TopPlayCard from "./TopPlayCard";

import "swiper/css";
import "swiper/css/free-mode";
import classes from "./TopPlay.module.css";

const TopPlay = () => {
  const widgetSongs = useSelector(state => state.player.widgetSongs);
  const dispatch = useDispatch();
  const history = useHistory();

  let { data } = useGetWorldChartsQuery();

  
  useEffect(() => {
    dispatch(
      playerSliceActions.setWidgetSongs(
        data?.map((item, index) => ({ ...item, index })).slice(0, 5)
      )
    );
  }, [dispatch, data]);

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
              className={`rounded-circle ${classes["artist-images"]}`}
              onClick={() =>
                history.push(
                  `/artist-details/${widgetSongs[i].artists[0].adamid}`
                )
              }
            />
          </SwiperSlide>
        );
    }
    return arr;
  };

  return (
    <section
      className={`text-white mt-4 mt-sm-3 col-12 col-lg-4 col-xl-3 animate-left ${classes["top-play"]}`}
    >
      <div className="row justify-content-between">
        <div className="col-12 col-sm-6 col-lg-12">
          <h4 className="ms-3">Top Charts</h4>
          <ol
            className="list-group list-group-numbered"
            onClick={() =>
              dispatch(playerSliceActions.toggleWidgetActive(true))
            }
          >
            {getSongs(true)}
          </ol>
        </div>
        <div
          className="mt-3 col-12 col-sm-5 col-lg-12"
          style={{ overflow: "hidden" }}
        >
          <h4>Top Artists</h4>
          <Swiper
            slidesPerView="auto"
            spaceBetween={15}
            freeMode
            centeredSlides
            centeredSlidesBounds
            modules={[FreeMode]}
            className={`mt-4`}
          >
            {getSongs(false)}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TopPlay;
