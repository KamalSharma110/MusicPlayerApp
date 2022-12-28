import { useDispatch, useSelector } from "react-redux";
import {playerSliceActions} from '../../store/store.js';
import SeekBar from "./SeekBar.jsx";

const Controls = (props) => {
  const isPlaying = useSelector((state) => state.isPlaying);
    const dispatch = useDispatch();

    const handlePlayPause = () => {
        dispatch(playerSliceActions.playPause());
    }

  return (
    <div className="col-4 d-flex flex-column">
      <i
        className={`bi bi-${
          isPlaying ? "pause" : "play"
        }-fill fs-1 text-white align-self-center`}
        onClick={handlePlayPause}
      ></i>
      <SeekBar duration={props.duration} currentTime={props.currentTime}/>
    </div>
  );
};

export default Controls;
