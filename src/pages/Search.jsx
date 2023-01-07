import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import SongCard from "../components/SongCard";
import { playerSliceActions } from "../store/store";

const Search = () => {
  const params = useParams();
  //   const [searchResults, setSearchResults] = useState([]);
  const currentSongs = useSelector((state) => state.currentSongs);
  const dispatch = useDispatch();

  useEffect(() => {
    const search = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "8687aad68cmsh68a2c535dcda472p199339jsne35acd458307",
          "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
        },
      };

      const response = await fetch(
        `https://shazam-core.p.rapidapi.com/v1/search/multi?search_type=SONGS_ARTISTS&query=${params.searchTerm}`,
        options
      );

      const data = await response.json();

      localStorage.setItem(`${params.searchTerm}`, JSON.stringify(data));

      dispatch(
        playerSliceActions.setCurrentSongs(
          data.tracks.hits.map((item, index) => ({ ...item.track, index }))
        )
      );
    };

    const searchData = JSON.parse(localStorage.getItem(`${params.searchTerm}`));

    if (!searchData) search();
    else
      dispatch(
        playerSliceActions.setCurrentSongs(
          searchData.tracks.hits.map((item, index) => ({ ...item.track, index }))
        )
      );
  }, [params.searchTerm, dispatch]);

  return (
    <section className="col-12 col-lg-7 mt-4">
      <div className="row">
        <SearchBar />
      </div>

      <div className="row justify-content-sm-between justify-content-center align-items-center">
        <h4 className="col-12 col-sm-auto text-white text-center my-3">
          Search Results for {params.searchTerm}
        </h4>
      </div>

      <div className="row g-4">
        {currentSongs?.map((item) => {
          if (!item.artists) return "";

          return (
            <SongCard
              key={item.key}
              title={item.title}
              subtitle={item.subtitle}
              image={item.images?.coverart}
              songData={item}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Search;
