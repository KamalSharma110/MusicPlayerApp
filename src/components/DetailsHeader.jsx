import classes from './DetailsHeader.module.css';

const DetailsHeader = ({details}) => {
  const {trackadamid : id} = details;

  return (
    <div className={`row text-white position-relative ${classes['track-details']}`}>
      <div className="col-3">
          <img
            src={id ? details?.images.coverart : details.data[0].attributes.artwork.url}
            alt=""
            className="rounded-circle img-thumbnail"
          />
      </div>
      {/* <div className="col-4 d-flex flex-column justify-content-center">
          <p className="truncate fw-semibold mb-0 fs-4">{trackDetails?.title}</p>
          <small className="truncate d-block fw-light fs-6">{trackDetails?.subtitle}</small>
          <small className="fw-light fs-6">{trackDetails?.genres.primary}</small>
      </div> */}
    </div>
  );
};

export default DetailsHeader;
