import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playerSliceActions } from "../../store/store.js";
import SeekBar from "./SeekBar.jsx";

const Controls = (props) => {
  const isPlaying = useSelector((state) => state.isPlaying);
  const dispatch = useDispatch();
  const [isLooping, setIsLooping] = useState(false);

  const handlePlayPause = () => {
    dispatch(playerSliceActions.playPause());
  };

  return (
    <div className="col-4 d-flex flex-column">
      <div className="d-flex justify-content-evenly align-items-center px-3">
        <i
          className={`bi bi-repeat${isLooping ? "-1" : ""} fs-5`}
          onClick={() => {
            document.getElementById('audio').loop = !isLooping;
            setIsLooping(!isLooping);
          }}
        ></i>

        <i class="bi bi-skip-start-fill fs-3"></i>

        <i
          className={`bi bi-${
            isPlaying ? "pause" : "play"
          }-fill fs-1 align-self-center`}
          onClick={handlePlayPause}
        ></i>

        <i class="bi bi-skip-end-fill fs-3"></i>

        <i class="bi bi-shuffle fs-5"></i>
      </div>
      <SeekBar duration={props.duration} currentTime={props.currentTime} />
    </div>
  );
};

export default Controls;
