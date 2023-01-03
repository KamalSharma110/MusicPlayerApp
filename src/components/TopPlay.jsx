import React from "react";
import { useSelector } from "react-redux";
import classes from "./TopPlay.module.css";

const TopPlay = () => {
  const currentSongs = useSelector((state) => state.currentSongs);

  const getSongs = (songRequested) => {
    const arr = [];
    for (let i = 0; i < currentSongs.length; i++) {
      if (arr.length >= 5) break;
      if (!currentSongs[i].artists) continue;
      if (songRequested === true)
        arr.push(
          <li
            className="list-group-item d-flex align-items-center text-white my-1 rounded-2"
            key={currentSongs[i].key}
          >
            <img
              src={currentSongs[i].images?.coverart}
              alt="song_img"
              className="rounded mx-2"
              width="60px"
            />
            <div className="w-50">
              <p className={`mb-0 fw-semibold truncate`}>
                {currentSongs[i].title}
              </p>
              <small className="truncate d-block">
                {currentSongs[i].subtitle}
              </small>
            </div>
            <i className="bi bi-play-circle-fill text-white fs-2 ms-auto"></i>
          </li>
        );
      else
        arr.push(
          <li className="list-group-item">
            <img
              src={currentSongs[i].images.background}
              alt="song-artists"
              className="rounded-circle"
              width="100px"
            />
          </li>
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
        <ul className="list-group list-group-horizontal">{getSongs(false)}</ul>
      </div>
    </section>
  );
};

export default TopPlay;
