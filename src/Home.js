import React from "react";
import Username from "./Username";

function Home() {

    return (
        <div className="container-fluid">
            <p>Hello and welcome to my project. Here, you can play a memory game, see high scores
            from everyone who has played, and leave comments to chat with fellow players. In order to 
            play or leave comments, you must pick a username. Note that if you refresh the page anywhere
            you will have to re-enter your username. I haven't learned how to use cookies yet!</p>
            <Username />
        </div>
    )
}

export default Home;