import "./App.css";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import ButtonAppBar from "./components/AppBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Puppy Bowl 2024</h1>
      <div className="header">
        <ButtonAppBar></ButtonAppBar>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<AllPlayers />}></Route>
          <Route path="/players/:id" element={<SinglePlayer />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
