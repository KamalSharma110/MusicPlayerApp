import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { playerSliceActions } from "../store/store";
import classes from "./SongCard.module.css";
import { Link } from "react-router-dom";

const SongCard = (props) => {
  const isPlaying = useSelector((state) => state.isPlaying);
  const activeSong = useSelector((state) => state.activeSong);
  const dispatch = useDispatch();
  const isActive = activeSong === props.songData;
  const isActiveAndPlaying = isPlaying && isActive;

  const handleClick = () => {
    if (isActive) dispatch(playerSliceActions.playPause());
    else dispatch(playerSliceActions.setActiveSong(props.songData));
  };

  return (
    <div className={`col-6 col-sm-4 col-xl-3 ${classes.songcard}`}>
      <div
        className="rounded p-3 text-white bg-white"
        style={{ "--bs-bg-opacity": "0.1" }}
      >
        <div className={classes["image-container"]} onClick={handleClick}>
          <img
            src={props.image}
            alt="song_img"
            className={`img-fluid rounded ${
              isActiveAndPlaying ? classes["img_active"] : ""
            }`}
          />

          <i
            className={`${classes["icon_default"]} bi bi-${
              isActiveAndPlaying ? "pause" : "play"
            }-circle-fill ${isActiveAndPlaying ? classes["icon_active"] : ""}`}
          ></i>
        </div>

        <Link to={`/song-details/${props.songData.key}`}>
          <p className={`mb-0 mt-1 fw-semibold truncate`}>{props.title}</p>
        </Link>
        <Link to={`/artist-details/${props.songData.artists[0].adamid}`}>
          <small className="truncate d-block">{props.subtitle}</small>
        </Link>
      </div>
    </div>
  );
};

export default SongCard;
