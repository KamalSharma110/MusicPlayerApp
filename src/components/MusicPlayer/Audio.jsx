import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playerSliceActions } from "../../store/store";

const Audio = (props) => {
  const ref = useRef();
  const activeSong = useSelector((state) => state.activeSong);
  const isPlaying = useSelector((state) => state.isPlaying);
  const dispatch = useDispatch();

  if (isPlaying) ref.current?.play().catch(() => {});
  else ref.current?.pause();

  return (
    <audio
      id="audio"
      src={activeSong.hub?.actions?.at(1).uri}
      ref={ref}
      onLoadedData={() => props.onLoadedData(ref.current?.duration)} //this will help to show the duration of the current song
      onTimeUpdate={() => props.onTimeUpdate(ref.current?.currentTime)} //this will help to show the elapsed time of the current song
      onEnded={() => dispatch(playerSliceActions.nextSong())}
      />
  );
};

export default Audio;
