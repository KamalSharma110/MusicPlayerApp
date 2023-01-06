import { useSelector } from "react-redux";
import ArtistCard from "../components/ArtistCard";

const TopArtists = () => {
  const currentSongs = useSelector((state) => state.currentSongs);

  return (
    <section className="col-12 col-lg-7 mt-4">
      <h4 className="row text-white text-center my-3">Top Artists</h4>
      <div className="row g-4">
        {currentSongs.map((song) => {
          if (!song.images) return "";

          let i = song.subtitle.search(/[&,]/);
          if (i === -1) i = song.subtitle.length;

          return (
            <ArtistCard
              key={song.artists[0].adamid}
              artistId={song.artists[0].adamid}
              artistName={song.subtitle.substring(0, i)}
              imageUrl={song.images?.background}
            />
          );
        })}
      </div>
    </section>
  );
};

export default TopArtists;
