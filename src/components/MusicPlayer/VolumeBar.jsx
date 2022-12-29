import { useState } from "react";

let prevVolume;
const VolumeBar = () => {
  const [isMute, setIsMute] = useState(false);
  const volumeInput = document.getElementById("volume");
  const audioElement = document.getElementById("audio");

  const toggleMute = (isMute) => {
    if (isMute) {
      prevVolume = volumeInput.value;
      audioElement.volume = volumeInput.value = 0;
    } else {
        audioElement.volume = volumeInput.value = prevVolume;
    }
  };

  return (
    <div className="col-4 align-items-center justify-content-end d-flex pe-5">
      <i
        className={`bi bi-volume-${
          isMute ? "mute" : "up"
        }-fill fs-3 text-white`}
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
        onChange={() => (audioElement.volume = volumeInput.value)}
      />
    </div>
  );
};

export default VolumeBar;
