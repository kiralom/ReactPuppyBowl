import "./App.css";
import AllPlayers from "./components/AllPlayers";
import NavBar from "./components/NavBar";
import SinglePlayer from "./components/SinglePlayer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <h1>App Coming Soon!</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllPlayers />}></Route>
        <Route path="/players/:id" element={<SinglePlayer />}></Route>
      </Routes>
    </>
  );
}

export default App;
