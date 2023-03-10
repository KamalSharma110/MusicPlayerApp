const AlbumCard = ({ albumData }) => {
  return (
    <li
      className="list-group-item d-flex align-items-center text-white rounded-2 mb-2"
      style={{ backgroundColor: "#4c426e", border: "none"}}
    >
      <img
        src={albumData.artwork.url}
        alt="song_img"
        className="rounded mx-2"
        width="60px"
      />
      <div className="w-50">
        <p className={`mb-0 fw-semibold truncate`}>{albumData.name}</p>
        <small className="truncate d-block">{albumData.albumName}</small>
      </div>
    </li>
  );
};

export default AlbumCard;
