import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsHeader from "../components/DetailsHeader";

const SongDetails = () => {
  const params = useParams();
  const [trackDetails, setTrackDetails] = useState(null);

  useEffect(() => {
    const fetchSongDetails = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "8687aad68cmsh68a2c535dcda472p199339jsne35acd458307",
          "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
        },
      };

      const response = await fetch(
        `https://shazam-core.p.rapidapi.com/v1/tracks/details?track_id=${params.songId}`,
        options
      );

      const data = await response.json();
      localStorage.setItem(`songDetailsData_${params.songId}`, JSON.stringify(data));
      setTrackDetails(data); // need this call here also
    };

    const songDetailsData = JSON.parse(localStorage.getItem(`songDetailsData_${params.songId}`));

    if (!songDetailsData) fetchSongDetails();
    else setTrackDetails(songDetailsData); // this is in else statement because this line will run before the complete execution of fetchSongDetails()

  }, [params.songId]);

  return (
    <section className="text-white col-12 col-lg-7 mt-5">
      <DetailsHeader trackDetails={trackDetails}/>
      <h4 className="mb-3">Lyrics</h4>
      {trackDetails?.sections[1].text.map((line, index) => <p key={index} className="mb-0 fw-light">{line}</p>)}
    </section>
  );
};

export default SongDetails;
