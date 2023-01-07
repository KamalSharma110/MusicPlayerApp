import { useSelector } from "react-redux";
import ArtistCard from "../components/ArtistCard";

const TopArtists = () => {
  const currentSongs = useSelector((state) => state.currentSongs);

  const mapArtists = (song, index) => {
    if (!song.images) return "";

    const res = currentSongs.findIndex((currentSong) => {
      if (!currentSong.artists) return false;
      return currentSong.artists[0].adamid === song.artists[0].adamid;
    });

    
    if (res < index) return "";

    let i = song.subtitle.search(/[&,]/);
    if (i === -1) i = song.subtitle.length;

    return (
      <ArtistCard
        key={song.artists[0].adamid}
        artistId={song.artists[0].adamid}
        artistName={song.subtitle.substring(0, i)}
        imageUrl={song.images.background}
      />
    );
  };

  return (
    <section className="col-12 col-lg-7 mt-4">
      <h4 className="row text-white text-center my-3">Top Artists</h4>
      <div className="row g-4">
        {currentSongs.map((song, index) => mapArtists(song, index))}
      </div>
    </section>
  );
};

export default TopArtists;
