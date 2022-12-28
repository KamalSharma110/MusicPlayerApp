import Audio from "./Audio";

const Player = () => {
  return (
    <div
      className="d-flex bg-white rounded-top-4 bg-opacity-50 fixed-bottom justify-content-center align-items-center"
      style={{ height: "100px" }}
    >
      <i className="bi bi-play-circle-fill fs-1 text-white"></i>
      <Audio />
    </div>
  );
};

export default Player;