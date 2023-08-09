import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";

import AlbumCard from "../components/AlbumCard";
import DetailsHeader from "../components/DetailsHeader";
import Loader from "../components/Loader";
import Error from "../components/Error";
import {
  useGetArtistAlbumsQuery,
  useGetArtistDetailsQuery,
} from "../services/spotify";
import { useGetArtistBioQuery } from "../services/spotifyRapidApi";


const ArtistDetails = () => {
  const params = useParams();
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }, [ref]);

  const {
    data: artistDetails,
    isFetching: isFetchingDetails,
    error: detailsError,
  } = useGetArtistDetailsQuery(params.artistId);

  const {
    data: artistAlbums,
    isFetching,
    error,
  } = useGetArtistAlbumsQuery(params.artistId);

  const {data: bioData, isFetching: isFetchingBio, error: bioError} = useGetArtistBioQuery(params.artistId);

  return (
    <section
      className="text-white col-12 col-lg-6 col-xl-7 mt-5 mt-lg-4"
      style={{ marginTop: "5rem" }}
      ref={ref}
    >
      {(isFetching || isFetchingDetails || isFetchingBio) && <Loader />}
      {(error || detailsError || bioError) && <Error />}
      {artistAlbums && artistDetails && bioData && (
        <>
          <DetailsHeader artistDetails={artistDetails} bio={bioData?.data.artist.profile.biography.text}/>
          <div>
            <h4 className="mb-4 mt-5">Related Songs</h4>
            <ol className="list-group list-group-numbered">
              {artistAlbums?.items.map((album) => (
                <AlbumCard
                  image={album.images[0].url}
                  name={album.name}
                  key={album.id}
                  releaseDate={album.release_date}
                />
              ))}
            </ol>
          </div>
        </>
      )}
    </section>
  );
};

export default ArtistDetails;
