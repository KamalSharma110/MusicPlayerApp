import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useGetSearchedSongsQuery } from "../services/spotify";
import { playerSliceActions } from "../store/store";
import SearchBar from "../components/SearchBar";
import SongCard from "../components/SongCard";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Search = () => {
  const currentSongs = useSelector(state => state.player.currentSongs);
  const params = useParams();
  const dispatch = useDispatch();

  const { data, isFetching, error } = useGetSearchedSongsQuery(
    params.searchTerm
  );

  useEffect(() => {
    dispatch(
      playerSliceActions.setCurrentSongs(
        data?.tracks.items
      )
    );
  }, [data, dispatch]);


  return (
    <section className="col-12 col-lg-7 mt-4">
      <div className="row">
        <SearchBar />
      </div>

      <div className="row justify-content-sm-between justify-content-center align-items-center">
        <h4 className="col-12 col-sm-auto text-white text-center my-3">
          Search Results for "{params.searchTerm}"
        </h4>
      </div>

      <div className="row g-4">
        {isFetching && <Loader title='Loading Search Results...'/>}
        {error && <Error />}
        {currentSongs?.map((item) => {
          return (
            <SongCard
              key={item.id}
              image={item.image}
              songData={item}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Search;
