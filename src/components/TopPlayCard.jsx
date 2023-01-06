import { useDispatch, useSelector } from "react-redux";
import { playerSliceActions } from "../store/store";
import classes from './TopPlayCard.module.css';

const TopPlayCard = (props) => {
  const { images, title, subtitle } = props.song;
  const isPlaying = useSelector((state) => state.isPlaying);
  const activeSong = useSelector((state) => state.activeSong);
  const dispatch = useDispatch();
  const isActive = activeSong === props.song;

  const handleClick = () => {
    if (isActive) dispatch(playerSliceActions.playPause());
    else dispatch(playerSliceActions.setActiveSong(props.song));
  };

  return (
    <li
      className={`list-group-item d-flex align-items-center text-white rounded-2 ${classes['top-play-card']}`}
    >
      <img
        src={images?.coverart}
        alt="song_img"
        className="rounded mx-2"
        width="60px"
      />
      <div className="w-50">
        <p className={`mb-0 fw-semibold truncate`}>{title}</p>
        <small className="truncate d-block">{subtitle}</small>
      </div>
      <i
        className={`bi bi-${
          isPlaying && isActive? "pause" : "play"
        }-circle-fill text-white fs-2 ms-auto`}
        onClick={handleClick}
      ></i>
    </li>
  );
};

export default TopPlayCard;
