import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playerSliceActions } from "../store/store";
import TopPlayCard from "./TopPlayCard";

const RelatedSongs = ({id : songId}) => {
  const currentSongs = useSelector(state => state.currentSongs);
  const dispatch = useDispatch();
  
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
        `https://shazam-core.p.rapidapi.com/v1/tracks/related?track_id=${songId}`,
        options
      );

      const data = await response.json();
      localStorage.setItem(`relatedSongs_${songId}`, JSON.stringify(data));
      dispatch(
        playerSliceActions.setCurrentSongs(
          data.map((item, index) => ({ ...item, index }))
        )
      );
    };

    const relatedSongsData = JSON.parse(
      localStorage.getItem(`relatedSongs_${songId}`)
    );

    if (!relatedSongsData) fetchRelatedSongs();
    else dispatch(
      playerSliceActions.setCurrentSongs(
        relatedSongsData.map((item, index) => ({ ...item, index }))
      )
    );
  }, [songId, dispatch]);

  return (
    <div>
      <h4 className="mb-4 mt-5">Related Songs</h4>
      <ol 
      className="list-group list-group-numbered"
      onClick={() => dispatch(playerSliceActions.toggleWidgetActive(false))}
      >
        {currentSongs.map((relatedSong) => (
          <TopPlayCard song={relatedSong} key={relatedSong.key} />
        ))}
      </ol>
    </div>
  );
};

export default RelatedSongs;
