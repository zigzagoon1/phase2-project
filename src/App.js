import React, {useContext} from "react";
import NavBar from "./NavBar";
import Home from './Home';
import MemoryGame from './MemoryGame';
import Scores from "./Scores";
import CommentsPage from "./CommentsPage";
import {Routes, Route} from 'react-router-dom';
import { PauseProvider } from "./context/paused";
import {UsernameProvider} from './context/username';
function App() {

  return(
    <UsernameProvider>
    <PauseProvider>
    <div className="containerjustify-content-center bg-light border rounded">
      <h1 className="justify-content-center">Welcome to my phase 2 React Project!</h1>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/memory" element={<MemoryGame />} />
            <Route path="/scores" element={<Scores />} />
            <Route path="/comments" element={<CommentsPage />} />
          </Routes>
      
    </div>
    </PauseProvider>
    </UsernameProvider>
  )
}

export default App;
