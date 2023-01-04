import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsHeader from "../components/DetailsHeader";

const ArtistDetails = () => {
  const params = useParams();
  const [artistDetails, setArtistDetails] = useState(null);

  useEffect(() => {
    const fetchArtistDetails = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "8687aad68cmsh68a2c535dcda472p199339jsne35acd458307",
          "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
        },
      };

      const response = await fetch(
        `https://shazam-core.p.rapidapi.com/v2/artists/details?artist_id=${params.artistId}`,
        options
      );

      const data = await response.json();
      localStorage.setItem(`artistDetailsData_${params.artistId}`, JSON.stringify(data));
      setArtistDetails(data); 
    };

    const artistDetailsData = JSON.parse(localStorage.getItem(`artistDetailsData_${params.artistId}`));

    if (!artistDetailsData) fetchArtistDetails();
    else setArtistDetails(artistDetailsData); 

  }, [params.artistId]);


  return (
    <section className="text-white col-12 col-lg-7" style={{marginTop: '5rem'}}>
      <DetailsHeader details={artistDetails}/>
    </section>
  );
};

export default ArtistDetails;