import React, { useState } from "react";

let prevVolume;
const VolumeBar = () => {
  const [isMute, setIsMute] = useState(false);

  const toggleMute = (isMute) => {
    if (isMute) {
      prevVolume = document.getElementById("volume").value;
      document.getElementById("audio").volume = document.getElementById("volume").value = 0;
    } else {
      document.getElementById("audio").volume = document.getElementById("volume").value = prevVolume;
    }
  };


  return (
    <div className="col-4 align-items-center justify-content-end d-flex pe-5">
      <i
        className={`bi bi-volume-${
          isMute ? "mute" : "up"
        }-fill fs-3`}
        onClick={() => {
          toggleMute(!isMute); //we can put it after setIsMute also
          setIsMute(!isMute);
        }}
      ></i>
      <input
        id="volume"
        className="ms-2"
        type="range"
        min="0.0"
        max="1.0"
        step="0.01"
        onChange={() => {
          document.getElementById("audio").volume = document.getElementById("volume")?.value;
          if(document.getElementById("volume")?.value === '0') setIsMute(true);
          else setIsMute(false);
        }}
      />
    </div>
  );
};

export default React.memo(VolumeBar);
