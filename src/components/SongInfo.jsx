import React from "react";
import { Link } from "react-router-dom";

const songInfo = (props) => {
  return (
    <React.Fragment>
      <Link to={`/song-details/${props.songData.key}`} className="hover">
        <p className={`mb-0 mt-1 fw-semibold truncate`}>{props.songData.title}</p>
      </Link>
      <Link
        to={`/artist-details/${props.songData.artists?.at(0).adamid}`}
        className="hover"
      >
        <small className="truncate d-block">{props.songData.subtitle}</small>
      </Link>
    </React.Fragment>
  );
};

export default songInfo;
