import { useRef } from "react";
import classes from "./DetailsHeader.module.css";

const DetailsHeader = ({ details }) => {
  const { trackadamid: songId } = details;
  const ref = useRef();

  return (
    <div
      className={`row text-white position-relative ${classes["track-details"]}`}
    >
      <div className="col-3">
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
      <div className="col-9 d-flex flex-column justify-content-center">
        <p className="truncate fw-semibold mb-0 fs-4">
          {songId ? details.title : details.data[0].attributes.name}
        </p>
        <small className={`truncate d-block ${songId ? 'fw-light':'fw-semibold'} fs-6`}>
          {songId ? details.subtitle : details.data[0].attributes.origin}
        </small>
        <small id ='artistBio' ref={ref} className={`fw-light fs-6 ${songId ? '':'mt-4'}`}>
          {songId
            ? details.genres.primary
            : ref.current? ref.current.innerHTML = details.data[0].attributes.artistBio:''}
        </small>
      </div>
    </div>
  );
};

export default DetailsHeader;
