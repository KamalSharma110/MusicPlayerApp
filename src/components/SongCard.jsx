import classes from './SongCard.module.css';

const SongCard = (props) => {
    return (
        <div className={`col-6 col-sm-4 col-xl-3 ${classes.songcard}`}>
            <div className="rounded p-3 text-white bg-white" style={{ "--bs-bg-opacity": "0.05" }} >
                <div className={classes['image-container']}>
                    <img src={props.image} alt="song_img" className="img-fluid rounded" />
                    <i className="bi bi-play-circle-fill"></i>
                </div>

                <p className={`mb-0 mt-1 fw-semibold ${classes.truncate}`}>{props.title}</p>
                <small className={classes.truncate}>{props.subtitle}</small>
            </div>
        </div>
    );
};

export default SongCard;