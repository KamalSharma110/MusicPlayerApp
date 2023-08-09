import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { playerSliceActions } from "../store/store";
import classes from "./SongCard.module.css";
import SongInfo from "./SongInfo";


const SongCard = (props) => {
  const isPlaying = useSelector((state) => state.player.isPlaying);
  const activeSong = useSelector((state) => state.player.activeSong);
  const dispatch = useDispatch();
  const isActive = activeSong.id === props.songData.id;
  const isActiveAndPlaying = isPlaying && isActive;

  const handleClick = () => {
    dispatch(playerSliceActions.toggleWidgetActive(false));

    if (isActive) dispatch(playerSliceActions.playPause());
    else dispatch(playerSliceActions.setActiveSong(props.songData));
  };



  return (
    <div className="col-6 col-sm-4 col-md-3 col-lg-6 col-xl-3 animate-up">
      <div
        className="rounded p-1 p-sm-2 p-lg-3 text-white bg-white"
        style={{ "--bs-bg-opacity": "0.1" }}
      >
        <div className={classes["image-container"]} onClick={handleClick}>
          <img
            loading="lazy"
            src={props.image}
            alt="song_img"
            className={`img-fluid ${
              isActiveAndPlaying ? classes["img_active"] : ""
            }`}
            onLoad={(e) => {e.target.style.visibility = 'visible';}}
          />
          <i
            className={`${classes["icon_default"]} bi bi-${
              isActiveAndPlaying ? "pause" : "play"
            }-circle-fill ${isActiveAndPlaying ? classes["icon_active"] : ""}`}
          ></i>
        </div>

        <SongInfo songData={props.songData}/>
      </div>
     </div>
  );
};

export default SongCard;
