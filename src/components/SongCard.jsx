import { useDispatch, useSelector } from "react-redux";
import { playerSliceActions } from "../store/store";
import classes from "./SongCard.module.css";

const SongCard = (props) => {
  const isPlaying = useSelector((state) => state.isPlaying);
  const activeSong = useSelector((state) => state.activeSong);
  const dispatch = useDispatch();
  const isActive = (activeSong === props.songData);

  const handleClick = () => {
    if (isActive) dispatch(playerSliceActions.playPause());
    else dispatch(playerSliceActions.setActiveSong(props.songData));
  };

  return (
    <div className={`col-6 col-sm-4 col-xl-3 ${classes.songcard}`}>
      <div
        className="rounded p-3 text-white bg-white"
        style={{ "--bs-bg-opacity": "0.05" }}
      >
        <div className={classes["image-container"]} onClick={handleClick}>
          <img src={props.image} alt="song_img" className="img-fluid rounded" />

          <i
            className={`bi bi-${(isPlaying && isActive)? "pause" : "play"}-circle-fill`}
          ></i>
        </div>

        <p className={`mb-0 mt-1 fw-semibold truncate`}>{props.title}</p>
        <small className="truncate">{props.subtitle}</small>
      </div>
    </div>
  );
};

export default SongCard;
