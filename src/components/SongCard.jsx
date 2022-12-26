const SongCard = (props) => {
    return (
        <div className="col-6 col-sm-4 col-xl-3">
            <div className="rounded p-3 text-white" style={{backgroundColor: "rgb(255 255 255 / 10%)"}}>
                <img src={props.image} alt="song_img" className="img-fluid"/>
                <p className="mb-0 mt-1 fw-semibold">{props.title}</p>
                <small>{props.subtitle}</small>
            </div>
        </div>
    );
};

export default SongCard;