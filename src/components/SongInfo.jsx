import React from "react";
import { Link } from "react-router-dom";

const songInfo = (props) => {
  return (
    <React.Fragment>
      <Link to={`/song-details/${props.songData.id}`} className="hover">
        <p className={`mb-0 mt-1 fw-semibold truncate`}>{props.songData.name}</p>
      </Link>
      <Link
        to={`/artist-details/${props.songData.artist?.id}`}
        className="hover"
      >
        <small className="truncate d-block">{props.songData.artist?.name}</small>
      </Link>
    </React.Fragment>
  );
};

export default songInfo;
