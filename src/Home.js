import React, {useContext} from "react";
import Username from "./Username";
import { PauseContext } from "./context/paused";

function Home() {
    const [paused, setPaused] = useContext(PauseContext);
    if (!paused) {
        setPaused(true);
    }
    return (
        <div className="container justify-content-center">
          <div className="row justify-content-center">
            <Username />
            <p className="col-10 py-4">Hello and welcome to my project. Here, you can play a memory game, see high scores
            from everyone who has played, and leave comments to chat with fellow players. In order to 
            play or leave comments, you must pick a username. Note that if you refresh the page anywhere
            you will have to re-enter your username. I haven't learned how to use cookies yet!</p>
            
          </div>
        </div>
    )
}

export default Home;