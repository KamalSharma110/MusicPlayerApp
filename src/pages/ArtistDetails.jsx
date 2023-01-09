import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import AlbumCard from "../components/AlbumCard";
import DetailsHeader from "../components/DetailsHeader";
import Loader from "../components/Loader";
import Error from "../components/Error";

const ArtistDetails = () => {
  const params = useParams();
  const ref = useRef();
  const [artistDetails, setArtistDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });

    const fetchArtistDetails = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "8687aad68cmsh68a2c535dcda472p199339jsne35acd458307",
          "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
        },
      };
      setIsLoading(true);
      const response = await fetch(
        `https://shazam-core.p.rapidapi.com/v2/artists/details?artist_id=${params.artistId}`,
        options
      );

      const data = await response.json();
      setIsLoading(false);
      setArtistDetails(data);
    };

    fetchArtistDetails();
  }, [params.artistId]);

  let res = <Loader title="Loading Artist Details..." />;

  if (artistDetails && !artistDetails.data) res = <Error />;

  if (!isLoading && artistDetails && artistDetails.data)
    res = (
      <React.Fragment>
        <DetailsHeader details={artistDetails} />
        <div>
          <h4 className="mb-4 mt-5">Related Songs</h4>
          <ol className="list-group list-group-numbered">
            {artistDetails?.data
              ?.at(0)
              ?.views["top-songs"]?.data?.map((dataItem) => (
                <AlbumCard albumData={dataItem.attributes} key={dataItem.id} />
              ))}
          </ol>
        </div>
      </React.Fragment>
    );

  return (
    <section
      className="text-white col-12 col-lg-6 col-xl-7 mt-5 mt-lg-4"
      style={{ marginTop: "5rem" }}
      ref={ref}
    >
      {res}
    </section>
  );
};

export default ArtistDetails;
