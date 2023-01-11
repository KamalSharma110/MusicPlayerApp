import { useHistory } from "react-router-dom";

const ArtistCard = ({ artistName, imageUrl, artistId }) => {
  const history = useHistory();

  const clickHandler = () => history.push(`/artist-details/${artistId}`);

  return (
    <div
      className="col-6 col-sm-4 col-md-3 col-lg-6 
    col-xl-3 text-center text-white animate-up"
    >
      <img
        src={imageUrl}
        alt=""
        className="rounded-circle w-75"
        style={{ cursor: "pointer", maxWidth: '150px' }}
        onClick={clickHandler}
      />
      <p
        className={`mb-0 mt-1 fw-semibold truncate mx-auto`}
        style={{ cursor: "pointer", width: "min-content" }}
        onClick={clickHandler}
      >
        {artistName}
      </p>
    </div>
  );
};

export default ArtistCard;
