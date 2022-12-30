import Player from "./components/MusicPlayer/Player";
import SideBar from "./components/SideBar";
import Discover from "./pages/Discover";

function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
      <SideBar />
      <Discover />
      </div>
      <Player />
    </div>
  );
}

export default App;
