import { useDispatch, useSelector } from "react-redux";
import { playerSliceActions } from "../store/store";
import classes from "./TopPlayCard.module.css";
import SongInfo from './SongInfo';

const TopPlayCard = ({song}) => {
  const isPlaying = useSelector((state) => state.player.isPlaying);
  const activeSong = useSelector((state) => state.player.activeSong);
  const dispatch = useDispatch();
  const isActive = activeSong.id === song.id;

  const handleClick = () => {
    if (isActive) dispatch(playerSliceActions.playPause());
    else dispatch(playerSliceActions.setActiveSong(song));
  };

  return (
    <li
      className={`list-group-item d-flex align-items-center text-white rounded-2 ${classes["top-play-card"]}`}
    >
      <img
        loading="lazy"
        src={song.image}
        alt="song_img"
        className="rounded mx-2 img-fluid"
        // width="60px"
        style={{maxWidth: '60px'}}
        onLoad={(e) => {e.target.style.visibility = 'visible';}}
      />
      <div className="w-50">
        <SongInfo songData={song}/>
      </div>
      <i
        className={`bi bi-${
          isPlaying && isActive ? "pause" : "play"
        }-circle-fill text-white fs-2 ms-auto`}
        onClick={handleClick}
      ></i>
    </li>
  );
};

export default TopPlayCard;
