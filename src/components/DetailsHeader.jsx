import { useEffect } from "react";
import classes from "./DetailsHeader.module.css";

const DetailsHeader = ({ details }) => {
  const { trackadamid: songId } = details;

  useEffect(() => {
    if (!songId)
      document.getElementById("artistBio").innerHTML =
        details.data[0].attributes.artistBio;
  }, [songId, details]);

  return (
    <div
      className={`row text-white justify-content-center position-relative ${classes["track-details"]}`}
    >
      <div className="col-12 col-xl-3" style={{ maxWidth: "250px" }}>
        <img
          src={
            songId
              ? details.images.coverart
              : details.data[0].attributes.artwork.url
          }
          alt=""
          className="rounded-circle img-thumbnail"
        />
      </div>
      <div className="col-12 col-xl-9 d-flex flex-column justify-content-center text-center text-xl-start">
        <p className="truncate fw-semibold mb-0 fs-4">
          {songId ? details.title : details.data[0].attributes.name}
        </p>
        <small
          className={`truncate d-block ${
            songId ? "fw-light" : "fw-semibold"
          } fs-6`}
        >
          {songId ? details.subtitle : details.data[0].attributes.origin}
        </small>
        <small
          id="artistBio"
          className={`fw-light fs-6 ${songId ? "" : "mt-4"}`}
        >
          {songId ? details.genres.primary : ""}
        </small>
      </div>
    </div>
  );
};

export default DetailsHeader;
