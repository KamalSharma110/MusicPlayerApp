import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import { useGetSongDetailsQuery } from "../services/spotify";
import DetailsHeader from "../components/DetailsHeader";
import RelatedSongs from "../components/RelatedSongs";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useGetSongLyricsQuery } from "../services/spotifyRapidApi";

const SongDetails = () => {
  const params = useParams();
  const ref = useRef();

  const { data, isFetching, error } = useGetSongDetailsQuery(params.songId);

  const {data: lyricsData, isFetching: isFetchingLyrics, error: lyricsError} = useGetSongLyricsQuery(params.songId);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [data]);

  return (
    <section
      className="text-white col-12 col-lg-6 col-xl-7 mt-5 mt-lg-4"
      style={{ paddingTop: "5rem" }}
      ref={ref}
    >
      {(isFetching || isFetchingLyrics) && <Loader />}
      {(error || lyricsError) && <Error />}
      {data && lyricsData && (
        <>
          <DetailsHeader songDetails={data} />
          <h4 className="mb-4">Lyrics</h4>
          {lyricsData?.lyrics.lines.map((line, index) => (
            <p key={index} className="mb-0 fw-light">
              {line.words}
            </p>
          ))}
          <RelatedSongs id={params.songId} />
        </>
      )}
    </section>
  );
};

export default SongDetails;
