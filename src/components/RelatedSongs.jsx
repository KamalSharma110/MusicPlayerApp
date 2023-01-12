import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playerSliceActions } from "../store/store";
import { useGetRelatedSongsQuery } from "../services/shazamCore";

import TopPlayCard from "./TopPlayCard";
import Loader from "../components/Loader";
import Error from "../components/Error";

const RelatedSongs = ({id : songId}) => {
  const currentSongs = useSelector(state => state.player.currentSongs);
  const dispatch = useDispatch();

  const { data, isFetching, error } = useGetRelatedSongsQuery(songId);

  useEffect(() => {
    dispatch(
      playerSliceActions.setCurrentSongs(
        data?.map((item, index) => ({ ...item, index }))
      )
    );
  }, [dispatch, data]);


  return (
    <div>
      <h4 className="mb-4 mt-5">Related Songs</h4>
      <ol 
      className="list-group list-group-numbered"
      onClick={() => dispatch(playerSliceActions.toggleWidgetActive(false))}
      >
        {isFetching && <Loader title='Loading Related Songs...'/>}
        {error && <Error />}
        {currentSongs?.map((relatedSong) => (
          <TopPlayCard song={relatedSong} key={relatedSong.key} />
        ))}
      </ol>
    </div>
  );
};

export default RelatedSongs;
