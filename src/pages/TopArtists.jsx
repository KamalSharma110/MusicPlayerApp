import { useEffect, useRef } from "react";
import ArtistCard from "../components/ArtistCard";
import { useGetWorldChartsQuery } from "../services/shazamCore";
import Loader from '../components/Loader';
import Error from '../components/Error';

const TopArtists = () => {
  const ref = useRef();
  const { data, isFetching, error } = useGetWorldChartsQuery();

  useEffect(() => ref.current?.scrollIntoView({ behavior: "smooth" }), []);

  const mapArtists = (song, index) => {
    if (!song.images) return "";

    const res = data?.findIndex((currentSong) => {
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
    <section className="col-12 col-lg-6 col-xl-7 mt-5 mt-lg-4" ref={ref}>
      <h4 className="text-white text-center text-sm-start my-3">Top Artists</h4>
      <div className="row g-2 g-sm-3 g-md-4">
        {isFetching && <Loader title='Loading Top Artists...'/>}
        {error && <Error />}
        {data?.map((song, index) => mapArtists(song, index))}
      </div>
    </section>
  );
};

export default TopArtists;
