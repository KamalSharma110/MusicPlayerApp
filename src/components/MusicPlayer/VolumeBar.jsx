import React, { useEffect, useState } from "react";

let prevVolume, audioElement, volumeElement;
const VolumeBar = () => {
  const [isMute, setIsMute] = useState(false);

  useEffect(()=>{
    audioElement = document.getElementById("audio");
    volumeElement = document.getElementById("volume");
    audioElement.volume = volumeElement.value = 0.02;
  }, []);

  const toggleMute = (isMute) => {
    if (isMute) {
      prevVolume = volumeElement.value;
      audioElement.volume = volumeElement.value = 0;
    } else {
      audioElement.volume = volumeElement.value = prevVolume;
    }
  };

  const changeHandler = () => {
    audioElement.volume = volumeElement.value;
    if(volumeElement.value === '0') setIsMute(true);
    else setIsMute(false);
  }


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
        onChange={changeHandler}
      />
    </div>
  );
};

export default React.memo(VolumeBar);
