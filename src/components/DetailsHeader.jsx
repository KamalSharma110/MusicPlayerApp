import { useEffect } from "react";
import { Link } from "react-router-dom";

import classes from "./DetailsHeader.module.css";

const DetailsHeader = ({ artistDetails, songDetails, bio }) => {
  useEffect(() => {
    if (artistDetails)
      document.getElementById("artistBio").innerHTML =
        bio || '';
  }, [artistDetails, bio]);

  return (
    <div
      className={`row text-white justify-content-center position-relative ${classes["track-details"]}`}
    >
      <div className="col-12 col-xl-3" style={{ maxWidth: "250px" }}>
        <img
          src={
            songDetails
              ? songDetails.album.images[0].url
              : artistDetails.images[0].url
          }
          alt=""
          className="rounded-circle img-thumbnail"
          onLoad={(e) => {e.target.style.visibility = 'visible';}}
        />
      </div>
      <div className="col-12 col-xl-9 d-flex flex-column justify-content-center text-center text-xl-start">
        <p className="truncate fw-semibold mb-0 fs-4">
          {songDetails ? songDetails.name : artistDetails.name}
        </p>
        {songDetails && (
          <Link
            className="hover"
            to={`/artist-details/${songDetails.artists?.at(0).id}`}
          >
            <small className='truncate d-block fw-light fs-6'>
              {songDetails.artists[0].name}
            </small>
          </Link>
        )}
        <small
          id="artistBio"
          className={`fw-light fs-6 ${songDetails ? "" : "mt-4"}`}
        >
          {songDetails ? songDetails.album.genres?.at(0) : ""}
        </small>
      </div>
    </div>
  );
};

export default DetailsHeader;
