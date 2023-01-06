import { useHistory } from "react-router-dom";

const ArtistCard = ({ artistName, imageUrl, artistId }) => {
    const history = useHistory();

    const clickHandler = () => history.push(`/artist-details/${artistId}`);

  return (
    <div className="col-6 col-sm-4 col-xl-3 text-white text-center animate-up">
      <img
        src={imageUrl}
        alt=""
        className="rounded-circle"
        width="150px"
        style={{ cursor: "pointer" }}
        onClick={clickHandler}
      />
      <p
        className={`mb-0 mt-1 fw-semibold truncate`}
        style={{ cursor: "pointer" }}
        onClick={clickHandler}>
        {artistName}
      </p>
    </div>
  );
};

export default ArtistCard;
