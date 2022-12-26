import { useState } from "react";
import Audio from "./Audio";
import Controls from "./Controls";
import classes from "./Player.module.css";
import Track from "./Track";
import VolumeBar from "./VolumeBar";

const Player = () => {
  const [duration, setDuration] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  return (
    <div className={`row rounded-top-4 fixed-bottom ${classes.player}`}>
      <Track />
      <Controls duration={duration} currentTime={currentTime}/>
      <Audio
        onLoadedData={(val) => setDuration(val)}
        onTimeUpdate={(val) => setCurrentTime(val)}
      />
      <VolumeBar />
    </div>
  );
};

export default Player;
