const AlbumCard = ({ name, image, releaseDate }) => {
  return (
    <li
      className="list-group-item d-flex align-items-center text-white rounded-2 mb-2"
      style={{ backgroundColor: "#4c426e", border: "none"}}
    >
      <img
        loading="lazy"
        src={image}
        alt="song_img"
        className="rounded mx-2"
        width="60px"
        onLoad={(e) => {e.target.style.visibility = 'visible';}}
      />
      <div className="w-50">
        <p className={`mb-0 fw-semibold truncate`}>{name}</p>
        <small className="truncate d-block">{releaseDate}</small>
      </div>
    </li>
  );
};

export default AlbumCard;
