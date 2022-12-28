import { useDispatch, useSelector } from "react-redux";
import {playerSliceActions} from '../../store/store.js';

const Controls = () => {
  const isPlaying = useSelector((state) => state.isPlaying);
    const dispatch = useDispatch();

    const handlePlayPause = () => {
        dispatch(playerSliceActions.playPause());
    }

  return (
    <div className="col-4 align-items-center justify-content-center d-flex">
      <i
        className={`bi bi-${
          isPlaying ? "pause" : "play"
        }-fill fs-1 text-white`}
        onClick={handlePlayPause}
      ></i>
    </div>
  );
};

export default Controls;
