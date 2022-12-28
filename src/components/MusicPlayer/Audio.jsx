import { useRef } from "react";
import { useSelector } from "react-redux";

const Audio = () => {
  const ref = useRef();
  const activeSong = useSelector((state) => state.activeSong);
  const isPlaying = useSelector((state) => state.isPlaying);

  if (isPlaying) ref.current?.play();
  else ref.current?.pause();

    // ref.current.volume = 0.2;

  return <audio src={activeSong.hub?.actions[1].uri} ref={ref} preload='metadata'/>;
};

export default Audio;
