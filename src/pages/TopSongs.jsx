import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playerSliceActions } from "../store/store";

import { useGetTopChartsQuery } from "../services/spotify";
import SongCard from "../components/SongCard.jsx";
import Loader from "../components/Loader";
import Error from "../components/Error";

const TopSongs = () => {
  const currentSongs = useSelector(state => state.player.currentSongs);
  const dispatch = useDispatch();
  const ref = useRef();

  const { data, isFetching, error } = useGetTopChartsQuery(); //this hook will not be executed on every re-render because redux cache the api calls and 
  //thus useEffect will not run on every re-render even though it has 'data' as its dependency

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    dispatch(playerSliceActions.setCurrentSongs(data?.tracks));
  }, [dispatch, data]);


  return (
    <section className="col-12 col-lg-6 col-xl-7 mt-5 mt-lg-4" ref={ref}>
      <h4 className="text-white text-center text-sm-start my-3">
        Top Songs
      </h4>

      <div className="row g-2 g-sm-3 g-md-4">
        {isFetching && <Loader title="Loading Top Songs..." />}
        {error && <Error />}
        {currentSongs?.map((song) => {
          return (
            <SongCard
              key={song.id}
              image={song.image}
              songData={song}
            />
          );
        })}
      </div>
    </section>
  );
};

export default TopSongs;
