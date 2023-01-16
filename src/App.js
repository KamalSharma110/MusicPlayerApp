import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SideBar from "./components/SideBar";
import Discover from "./pages/Discover";
import TopPlay from "./components/TopPlay";
import Search from "./pages/Search.jsx";
import Loader from "./components/Loader";

const Player = React.lazy(() => import("./components/MusicPlayer/Player"));
const AroundYou = React.lazy(() => import("./pages/AroundYou"));
const TopArtists = React.lazy(() => import("./pages/TopArtists"));
const SongDetails = React.lazy(() => import("./pages/SongDetails"));
const ArtistDetails = React.lazy(() => import("./pages/ArtistDetails"));

function App() {
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
            <Route path="/aroundYou">
              <AroundYou />
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
