import React from "react";
import Username from "./Username";

function Home() {
    return (
        <div className="container-fluid">
            <p>Hello and welcome to my project. Here, you can play a memory game, see high Scores
            from everyone who has played, and leave comments to chat with fellow players. In order to 
            play or leave comments, you must pick a username. </p>
            <Username />
        </div>
    )
}

export default Home;