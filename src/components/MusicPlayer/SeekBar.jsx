import React, { useRef } from "react";

const SeekBar = (props) => {
  const ref = useRef();

  const getMinutesSeconds = (seconds) => {
    if (!seconds) seconds = 0;
    const value = Math.ceil(seconds);
    return (
      Math.floor(value / 60) + ":" + (value % 60).toString().padStart(2, "0")
    );
  };
  const currentTime = getMinutesSeconds(props.currentTime);

  return (
    <div className="d-sm-flex justify-content-between text-white">
      <input
        ref={ref}
        type="range"
        className="d-block mx-auto"
        style={{width: 'min(364px, 100%)'}}
        value={Math.ceil(props.currentTime)}
        min="0"
        max={Math.ceil(props.duration)}
        onChange={() => document.getElementById('audio').currentTime = ref.current.value}
        />
        <span style={{order: '-1'}}>{currentTime}</span>
      <span className="float-end">{getMinutesSeconds(props.duration)}</span>
    </div>
  );
};

export default SeekBar;
