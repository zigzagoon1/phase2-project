import React, {useState, useEffect, useContext} from "react";
import GameContainer from "./GameContainer";
import Username from './Username';
import GameScore from './GameScore';
import Timer from "./Timer";
import { PauseContext } from "./context/paused";
import { UsernameContext } from "./context/username";
function MemoryGame() {
    const [cards, setCards] = useState([]);
    const [score, setScore] = useState(0);
    const [paused, setPaused] = useContext(PauseContext);
    const [username] = useContext(UsernameContext)
    const constantScoreDeduction = 50;
    function shuffleArray(cards) {
        for (let i = cards.length - 1; i > 0; i--) {
             const j = Math.floor(Math.random() * (i + 1));
             [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards
    }
    useEffect(() => {
        fetch('http://localhost:3000/memory-card-images')
        .then(r => r.json())
        .then((cards) => {
           const finalCards = shuffleArray(cards);
           setCards(finalCards);
        });
    }, [])

    function handleFormSubmit(value) {
        if (paused) {
        setPaused(false);
        }
    }
    function handleGameComplete(lose) {
        if (lose) {
            //show GAME OVER 
            console.log("GAME OVER");
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
    return (
        <div className="container justify-content-center">
          <div className="row">
          
            <Username onSubmit={handleFormSubmit}/>
            <Timer onGameOver={handleGameComplete} deductFromScore={handleScore}/>
            <GameScore score={score}/>
          </div>
          
            <GameContainer cards={cards} onGameComplete={handleGameComplete} addToScore={handleScore}/>
        </div>
    )
}

export default MemoryGame;