import React from "react";
import { useSelector } from "react-redux";
import classes from "./TopPlay.module.css";
import TopPlayCard from "./TopPlayCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';


const TopPlay = () => {
  const currentSongs = useSelector((state) => state.currentSongs);

  const getSongs = (songRequested) => {
    const arr = [];
    for (let i = 0; i < currentSongs?.length; i++) {
      if (arr.length >= 5) break;
      if (!currentSongs[i].artists) continue;
      if (songRequested === true)
        arr.push(
          <TopPlayCard song={currentSongs[i]} key={currentSongs[i].key} />
        );
      else
        arr.push(
          <SwiperSlide
            key={currentSongs[i].key}
            style={{ width: "25%", height: "auto" }}
            className='rounded-circle animate-slideright'
          >
            <img
              src={currentSongs[i].images.background}
              alt="name"
              className="rounded-circle"
              width='100px'
            />
          </SwiperSlide>
        );
    }
    return arr;
  };

  return (
    <section className={`text-white col-12 col-lg-3 ${classes.topplay}`}>
      <div>
        <h4 className="mt-5">Top Charts</h4>
        <ol className="list-group list-group-numbered">{getSongs(true)}</ol>
      </div>
      <div>
        <h4 className="mt-5">Top Artists</h4>
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
