import React, { Suspense, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useGetTopChartsQuery } from "./services/spotify";
import { playerSliceActions } from "./store/store";
import { useDispatch } from "react-redux";

import SideBar from "./components/SideBar";
import TopPlay from "./components/TopPlay";
import Discover from "./pages/Discover";
import Search from "./pages/Search.jsx";
import Loader from "./components/Loader";

const Player = React.lazy(() => import("./components/MusicPlayer/Player"));
const TopSongs = React.lazy(() => import("./pages/TopSongs"));
const TopArtists = React.lazy(() => import("./pages/TopArtists"));
const SongDetails = React.lazy(() => import("./pages/SongDetails"));
const ArtistDetails = React.lazy(() => import("./pages/ArtistDetails"));

function App() {
  const dispatch = useDispatch();
  const { data } = useGetTopChartsQuery();

  useEffect(() => {
    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials&client_id=9bf85bf1837d4aa3a5f04589c6e0ae8b&client_secret=02601892ace444d09163ebdbd3ff4dd7",
    })
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem("access_token", result.access_token);
      });

    dispatch(
      playerSliceActions.setArtistIds(
        data?.tracks.reduce((result, element) => {
          if (element.preview_url) result += element.artists[0].id + ",";
          return result;
        }, "")
      )
    );
  }, [dispatch, data]);

  return (
    <div className="App container-fluid">
      <div className="row">
        <SideBar />
        <Suspense fallback={Loader}>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/discover" />
            </Route>
            <Route path="/discover">
              <Discover />
            </Route>
            <Route path="/topArtists">
              <TopArtists />
            </Route>
            <Route path="/topSongs">
              <TopSongs />
            </Route>
            <Route path="/song-details/:songId">
              <SongDetails />
            </Route>
            <Route path="/artist-details/:artistId">
              <ArtistDetails />
            </Route>
            <Route path="/search/:searchTerm">
              <Search />
            </Route>
            <Route path="*">
              <Redirect to="/discover" />
            </Route>
          </Switch>
        </Suspense>
        <TopPlay />
      </div>
      <Player />
    </div>
  );
}

export default App;
