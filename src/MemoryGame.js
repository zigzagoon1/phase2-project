import React, {useState, useEffect, useContext} from "react";
import GameContainer from "./GameContainer";
import Username from './Username';
import GameScore from './GameScore';
import Timer from "./Timer";
import HowToPlayModal from "./HowToPlayModal";
import TimeUp from "./TimeUp";
import { PauseContext } from "./context/paused";
import { UsernameContext } from "./context/username";
function MemoryGame() {
    const [score, setScore] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [paused, setPaused] = useContext(PauseContext);
    const [username] = useContext(UsernameContext)
    const [timeClassName, setTimeClassName] = useState("visually-hidden");
    const [timeUp, setTimeUp] = useState(false);
    const constantScoreDeduction = 50;

    
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/memory-card-images')
        .then(r => r.json())
        .then((cards) => {
            setCards(shuffleArray(cards));
        })
    }, [])
  
    function shuffleArray(cards) {
      for (let i = cards.length - 1; i > 0; i--) {
           const j = Math.floor(Math.random() * (i + 1));
           [cards[i], cards[j]] = [cards[j], cards[i]];
      }
      return cards
  }

    function handleGameComplete(lose) {
        if (lose) {
            //show GAME OVER 
            console.log("GAME OVER");
            setTimeClassName("display: block");
            setTimeUp(true);
            setPaused(true);

        }
        const newUser = {
            "username": username,
            "score": score
        }
        fetch('http://localhost:3000/scores', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser)
        })
        .then(r => r.json())
        .then((users) => console.log(users));
    }
    function handleScore(value = null) {
        if (value === null && score > 0) {
            setScore(score - constantScoreDeduction);
        }
        else {
            setScore(score + value);
        }
    }

    function handleShowModal(e) {
        e.stopPropagation();
        if (!paused) {
            setPaused(true);
        }
        setShowModal(!showModal);
    }

   function handleHideModal(e)
    {
        //if timer less than 90, setPaused(false) otherwise don't...
        if (document.querySelector('#timer').innerHTML < 90) {
        setPaused(false);
        }
        
        setShowModal(false);
    }    

    return (
        <div onClick={handleHideModal} className="container justify-content-center">
          <div className="row">
            <Username />
            <div className="row justify-content-center">
                <button className="col-2" onClick={(e) => handleShowModal(e)}>How to Play</button>
            </div>
            <HowToPlayModal show={showModal}/>
            <Timer onGameOver={handleGameComplete} deductFromScore={handleScore}/>
            <GameScore score={score}/>
          </div>
          <TimeUp className={timeClassName}/>
          <GameContainer cards={cards} onGameComplete={handleGameComplete} addToScore={handleScore} timeUp={timeUp}/>
        </div>
    )
}

export default MemoryGame;