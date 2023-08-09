import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import { playerSliceActions } from "../store/store";
import {
  useGetTopArtistsQuery,
  useGetTopChartsQuery,
} from "../services/spotify";
import TopPlayCard from "./TopPlayCard";
import classes from "./TopPlay.module.css";
import "swiper/css";
import "swiper/css/free-mode";

const TopPlay = () => {
  const widgetSongs = useSelector((state) => state.player.widgetSongs);
  const artistIds = useSelector((state) => state.player.artistIds);
  const dispatch = useDispatch();
  const history = useHistory();

  const { data: artistData } = useGetTopArtistsQuery(artistIds, {skip: !artistIds});
  const { data: songData } = useGetTopChartsQuery();

  useEffect(() => {
    dispatch(playerSliceActions.setWidgetSongs(songData?.tracks));
  }, [dispatch, songData]);

  const getSongs = (songRequested) => {
    const artists = artistData?.artists;
    if (!artists?.at(0) || !widgetSongs?.length) return;
    const arr = [];
    const end = songRequested ? widgetSongs.length : artists.length;

    for (let i = 0; i < end; i++) {
      if (songRequested) {
        arr.push(<TopPlayCard song={widgetSongs[i]} key={widgetSongs[i].id} />);
      } else {
        if(arr.length === 5) break;
        const res = artists.findIndex((artist) => {
          return artists[i].id === artist.id;
        });
        if (res < i) continue;
        arr.push(
          <SwiperSlide
            key={artists[i].id}
            style={{ width: "25%", height: "auto" }}
            className="rounded-circle animate-slideright"
          >
            <img
              loading="lazy"
              src={artists[i].images[2].url}
              alt=""
              className={`rounded-circle ${classes["artist-images"]}`}
              onClick={() => history.push(`/artist-details/${artists[i].id}`)}
              onLoad={(e) => {e.target.style.visibility = 'visible';}}
            />
          </SwiperSlide>
        );
      }
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
//very good place to use memo to prevent re evaluation because top play is not receiving any props
//but app.js will not re render it anyway because of react-router-dom package
