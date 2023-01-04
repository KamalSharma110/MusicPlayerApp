const DetailsHeader = ({trackDetails}) => {
  return (
    <div className="row text-white mb-5">
      <div className="col-2">
          <img
            src={trackDetails?.images.coverart}
            alt=""
            className="rounded-circle img-thumbnail"
          />
      </div>
      <div className="col-4 d-flex flex-column justify-content-center">
          <p className="truncate fw-semibold mb-0">{trackDetails?.title}</p>
          <small className="truncate d-block fw-light">{trackDetails?.subtitle}</small>
          <small className="fw-light">{trackDetails?.genres.primary}</small>
      </div>
    </div>
  );
};

export default DetailsHeader;
