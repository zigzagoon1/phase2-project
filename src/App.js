import React from "react";
import NavBar from "./NavBar";
import Home from './Home';
import MemoryGame from './Game';
import Scores from "./Scores";
import {Routes, Route} from 'react-router-dom';
// import {Switch, Route} from 'react-router-dom';
function App() {
  return(
    <div className="containerjustify-content-center bg-light border rounded">
      <h1 className="justify-content-center">Welcome to my phase 2 React Project!</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memory" element={<MemoryGame />} />
        <Route path="/scores" element={<Scores />} />
      </Routes>
    </div>
  )
}

export default App;
