import { useEffect, useState } from "react";
import TopPlayCard from "./TopPlayCard";

const RelatedSongs = ({ id }) => {
  const [relatedSongs, setRelatedSongs] = useState([]);

  useEffect(() => {
    const fetchRelatedSongs = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "8687aad68cmsh68a2c535dcda472p199339jsne35acd458307",
          "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
        },
      };

      const response = await fetch(
        `https://shazam-core.p.rapidapi.com/v1/tracks/related?track_id=${id}`,
        options
      );

      const data = await response.json();
      localStorage.setItem(`relatedSongs_${id}`, JSON.stringify(data));
      setRelatedSongs(data);
    };

    const relatedSongsData = JSON.parse(
      localStorage.getItem(`relatedSongs_${id}`)
    );

    if (!relatedSongsData) fetchRelatedSongs();
    else setRelatedSongs(relatedSongsData);
  }, [id]);

  return (
    <div>
      <h4 className="mb-4 mt-5">Related Songs</h4>
      <ol className="list-group list-group-numbered">
        {relatedSongs.map((relatedSong) => (
          <TopPlayCard song={relatedSong} key={relatedSong.key} />
        ))}
      </ol>
    </div>
  );
};

export default RelatedSongs;
