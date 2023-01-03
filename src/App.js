import { Redirect, Route, Switch } from "react-router-dom";
import Player from "./components/MusicPlayer/Player";
import SideBar from "./components/SideBar";

import Discover from "./pages/Discover";
import AroundYou from "./pages/AroundYou";
import TopArtists from "./pages/TopArtists";
import TopCharts from "./pages/TopCharts";
import TopPlay from "./components/TopPlay";

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
          <Route path="/topCharts">
            <TopCharts />
          </Route>
          <Route path="/topArtists">
            <TopArtists />
          </Route>
          <Route path="/aroundYou">
            <AroundYou />
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
