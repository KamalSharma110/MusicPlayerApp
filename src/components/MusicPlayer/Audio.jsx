import { useRef } from "react";
import { useSelector } from "react-redux";

const Audio = (props) => {
  const ref = useRef();
  const activeSong = useSelector((state) => state.activeSong);
  const isPlaying = useSelector((state) => state.isPlaying);

  if (isPlaying) ref.current?.play();
  else ref.current?.pause();

  // ref.current.volume = 0.2;
  // console.log("current time " + ref.current?.currentTime);
  // console.log("duration " + ref.current?.duration);

  return (
    <audio
      id='audio'
      src={activeSong.hub?.actions[1].uri}
      ref={ref}
      autoPlay
      onLoadedData={() => props.onLoadedData(ref.current?.duration)}  //this will help to show the duration of the current song
      onTimeUpdate={() => props.onTimeUpdate(ref.current?.currentTime)} //this will help to show the elapsed time of the current song
    />
  );
};

export default Audio;
