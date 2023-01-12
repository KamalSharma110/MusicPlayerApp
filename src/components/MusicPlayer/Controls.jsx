import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playerSliceActions } from "../../store/store.js";

const Controls = () => {
  const isPlaying = useSelector((state) => state.player.isPlaying);
  const isShuffling = useSelector((state) => state.player.isShuffling);
  const dispatch = useDispatch();
  const [isLooping, setIsLooping] = useState(false);

  const handlePlayPause = () => {
    dispatch(playerSliceActions.playPause());
  };

  const handlePrevSong = () => {
    dispatch(playerSliceActions.prevSong());
  };

  const handleNextSong = () => {
    dispatch(playerSliceActions.nextSong());
  };

  const handleShuffle = () => dispatch(playerSliceActions.toggleShuffling());

  return (
    <div className="d-flex justify-content-evenly align-items-center">
      <i
        className={`bi bi-repeat${isLooping ? "-1" : ""} fs-4`}
        onClick={() => {
          document.getElementById("audio").loop = !isLooping;
          setIsLooping(!isLooping);
        }}
      ></i>

      <i className="bi bi-skip-start-fill fs-3" onClick={handlePrevSong}></i>

      <i
        className={`bi bi-${
          isPlaying ? "pause" : "play"
        }-fill fs-1 align-self-center`}
        onClick={handlePlayPause}
      ></i>

      <i className="bi bi-skip-end-fill fs-3" onClick={handleNextSong}></i>

      <i
        className={`bi bi-shuffle fs-4 ${isShuffling ? "text-primary" : ""}`}
        onClick={handleShuffle}
      ></i>
    </div>
  );
};

export default Controls;
