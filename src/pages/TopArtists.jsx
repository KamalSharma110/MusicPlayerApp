import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useGetTopArtistsQuery } from "../services/spotify";

import ArtistCard from "../components/ArtistCard";
import Loader from '../components/Loader';
import Error from '../components/Error';

const TopArtists = () => {
  const ref = useRef();
  const artistIds = useSelector(state => state.player.artistIds);
  const { data, isFetching, error } = useGetTopArtistsQuery(artistIds, {skip: !artistIds});

  useEffect(() => ref.current?.scrollIntoView({ behavior: "smooth" }), []);

  const mapArtists = (artist, index) => {

    const res = data?.artists.findIndex((currentArtist) => {
      return currentArtist.id === artist.id;
    });

    if (res < index) return "";

    let i = artist.name.search(/[&,]/);
    if (i === -1) i = artist.name.length;

    return (
      <ArtistCard
        key={artist.id}
        artistId={artist.id}
        artistName={artist.name.substring(0, i)}
        imageUrl={artist.images[2].url}
      />
    );
  };

  return (
    <section className="col-12 col-lg-6 col-xl-7 mt-5 mt-lg-4" ref={ref}>
      <h4 className="text-white text-center text-sm-start my-3">Top Artists</h4>
      <div className="row g-2 g-sm-3 g-md-4">
        {isFetching && <Loader title='Loading Top Artists...'/>}
        {error && <Error />}
        {data?.artists[0] !== null && data?.artists.map((artist, index) => mapArtists(artist, index))}
      </div>
    </section>
  );
};

export default TopArtists;
