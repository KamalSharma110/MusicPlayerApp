import React, { useEffect, useState } from "react";

let prevVolume, audioElement, volumeElement;
const VolumeBar = () => {
  const [isMute, setIsMute] = useState(false);

  useEffect(()=>{
    audioElement = document.getElementById("audio");
    volumeElement = document.getElementById("volume");
    audioElement.volume = volumeElement.value = 0.009;
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
    <div className="col-3 col-md-4 ps-2 align-items-center justify-content-end d-flex">
      {/* <div className="align-items-center justify-content-center d-flex w-100"> */}
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
          type="range"
          min="0.0"
          max="1.0"
          step="0.01"
          onChange={changeHandler}
          style={{width: 'min(100%, 130px)'}}
        />
      {/* </div> */}
    </div>
  );
};

export default React.memo(VolumeBar);
