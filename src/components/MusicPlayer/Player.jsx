import { useState } from "react";
import Audio from "./Audio";
import Controls from "./Controls";
import classes from "./Player.module.css";
import SeekBar from "./SeekBar";
import Track from "./Track";
import VolumeBar from "./VolumeBar";

const Player = () => {
  const [duration, setDuration] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  return (
    <div
      id="player"
      className={`row gx-0 px-2 px-md-4 px-lg-5 fixed-bottom ${classes.player} animate-up`}
    >
      <Track />
      <div className="col-6 justify-content-center col-md-4 d-flex flex-column">
        <Controls />
        <SeekBar duration={duration} currentTime={currentTime} />
      </div>
      <Audio
        onLoadedData={(val) => setDuration(val)}
        onTimeUpdate={(val) => setCurrentTime(val)}
      />
      <VolumeBar />
    </div>
  );
};

export default Player;
