import { Redirect, Route, Switch } from "react-router-dom";
import Player from "./components/MusicPlayer/Player";
import SideBar from "./components/SideBar";

import Discover from "./pages/Discover";
import AroundYou from "./pages/AroundYou";
import TopArtists from "./pages/TopArtists";
import TopPlay from "./components/TopPlay";
import SongDetails from "./pages/SongDetails";
import ArtistDetails from "./pages/ArtistDetails";
import Search from './pages/Search.jsx';

function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
        <SideBar />

        <Switch>
          <Route path="/" exact>
            <Discover />
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
          <Route path='/song-details/:songId'>
            <SongDetails />
          </Route>
          <Route path='/artist-details/:artistId'>
            <ArtistDetails />
          </Route>
          <Route path='/search/:searchTerm'>
            <Search />
          </Route>
          <Route path="*">
            <Redirect to="/discover"/>
          </Route>
        </Switch>

        <TopPlay />
      </div>
      <Player />
    </div>
  );
}

export default App;
