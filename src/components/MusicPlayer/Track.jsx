import { useSelector } from "react-redux";
import classes from './Track.module.css';

const Track = () => {
  const activeSong = useSelector((state) => state.activeSong);
  const isPlaying = useSelector((state) => state.isPlaying);

  return (
    <div className={`col-4 align-items-center d-flex p-2 ps-5 ${isPlaying ? classes.track: ''}`}>
      <img
        src={activeSong.images?.coverart}
        alt=""
        className="rounded-circle img-fluid"
        style={{width: `${activeSong ? '80px':'0px'}`}}
      />
      <div className="text-white ms-3">
        <p className="mb-0 fw-semibold truncate">{activeSong.title}</p>
        <small className="truncate">{activeSong.subtitle}</small>
      </div>
    </div>
  );
};

export default Track;
