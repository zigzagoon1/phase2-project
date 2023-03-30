import React, {useState, useEffect} from "react";
import NavBar from "./NavBar";
import Home from './Home';
import MemoryGame from './MemoryGame';
import HighScores from "./HighScores";
import CommentsPage from "./CommentsPage";
import {Routes, Route} from 'react-router-dom';
import { PauseProvider } from "./context/paused";
import {UsernameProvider} from './context/username';
function App() {

  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3000/comments')
    .then(r => r.json())
    .then((comments) => setComments(comments));
}, [])

  function handleAddComment(commentToAdd) {
    setComments([...comments, commentToAdd]);
  }
  return(
    <UsernameProvider>
    <PauseProvider>
    <div className="containerjustify-content-center border rounded bg-light">
      <h1 className="justify-content-center bg-success bg-gradient">Welcome To My Phase 2 React Project!</h1>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/memory" element={<MemoryGame />} />
            <Route path="/scores" element={<HighScores />} />
            <Route path="/comments" element={<CommentsPage comments={comments} addComment={handleAddComment}/>} />
          </Routes>
      
    </div>
    </PauseProvider>
    </UsernameProvider>
  )
}

export default App;
