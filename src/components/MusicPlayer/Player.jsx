import Audio from "./Audio";
import Controls from "./Controls";
import classes from './Player.module.css';
import Track from "./Track";

const Player = () => {
  return (
    <div
      className={`row rounded-top-4 fixed-bottom ${classes.player}`}
    >
      <Track />
      <Controls />
      <Audio />
    </div>
  );
};

export default Player;
