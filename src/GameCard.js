import React, {useState, useContext} from "react";
import { PauseContext } from "./context/paused";
import { UsernameContext } from "./context/username";

function GameCard({ src, id, alt, scale, onClick, isFlipped, isMatched, numFlipped, timeUp }) {
  const backOfCard = "../public/images/mount-fuji.png";
    const [front, setFront] = useState(false);
    const [paused, setPaused] = useContext(PauseContext);
    const [username, setUsername] = useContext(UsernameContext);
    const [firstClick, setFirstClick] = useState(true);
    
  function handleClick() {
    console.log("timeUp? " + timeUp);
    if (!timeUp) {
    onClick({ id, name: alt });
    console.log("paused: " + paused);
    }

    if (!paused && username && numFlipped < 2) {
      setTimeout(() => {
      setFront(!front);
      setFirstClick(false);
      }, 200);
    }

  }

  let className = "mx-auto card border-2 border-dark justify-content-center bg-light";
  if (isMatched) {
    console.log("is matched");
    className = "visually-hidden";
  }
  if (isFlipped) {
    className += " flip";
  }
  else if (!isFlipped && front === true) {
    setTimeout(() => {
    setFront(false);
    setFirstClick(true);
    }, 200)
  }


  return (
    <div className="col-md-2 col-sm-3 col-6 m-auto py-2">
      <div id="card" className={className} onClick={handleClick}>
        <img
          src={front ? src : backOfCard}
          alt={alt}
          style={{ scale: `${front ? scale : 100}%` }}
        />
      </div>
    </div>
  );
}

export default React.memo(GameCard);
