import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetSongDetailsQuery } from "../services/shazamCore";

import DetailsHeader from "../components/DetailsHeader";
import RelatedSongs from "../components/RelatedSongs";


const SongDetails = () => {
  const params = useParams();
  const ref = useRef();
  const [trackDetails, setTrackDetails] = useState(null);

  const { data } = useGetSongDetailsQuery(params.songId);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    
    setTrackDetails(data);
  }, [data]);


  return (
    <section
      className="text-white col-12 col-lg-6 col-xl-7 mt-5 mt-lg-4"
      style={{ paddingTop: "5rem" }}
      ref={ref}
    >
      {trackDetails && <DetailsHeader details={trackDetails} />}
      <h4 className="mb-4">Lyrics</h4>
      {trackDetails?.sections?.at(1)?.text?.map((line, index) => (
        <p key={index} className="mb-0 fw-light">
          {line}
        </p>
      ))}
      <RelatedSongs id={params.songId} />
    </section>
  );
};

export default SongDetails;
