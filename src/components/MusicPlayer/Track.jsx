import { useSelector } from "react-redux";
import SongInfo from "../SongInfo.jsx";
import classes from "./Track.module.css";

const Track = () => {
  const activeSong = useSelector((state) => state.player.activeSong);
  const isPlaying = useSelector((state) => state.player.isPlaying);

  return (
    <div
      className={`col-3 col-md-4 py-2 pe-0 pe-sm-4 justify-content-center justify-content-md-start ${classes.track} ${
        isPlaying ? classes["track-playing"] : ""
      }`}
    >
      <img
        src={activeSong.image}
        alt=""
        className="rounded-circle img-fluid"
        style={{ width: `${activeSong ? "80px" : "0px"}` }}
        onLoad={(e) => e.target.style.visibility = 'visible'}
      />
      <div className="text-white ms-3 d-none d-md-block">
        <SongInfo songData={activeSong} />
      </div>
    </div>
  );
};

export default Track;
