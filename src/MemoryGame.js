import React, {useState, useEffect, useContext} from "react";
import GameContainer from "./GameContainer";
import Username from './Username';
import Score from './Score';
import Timer from "./Timer";
import { PauseContext } from "./paused";
function MemoryGame() {
    const [cards, setCards] = useState([]);
    const [users, setUsers] = useState([]);
    const [score, setScore] = useState(0);
    const [hasUsername, setHasUsername] = useState(false);
    const [paused, setPaused] = useContext(PauseContext);
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
        fetch('http://localhost:3000/scores')
        .then(r => r.json())
        .then((users) => setUsers([users.name]));
    }, [])

    function handleFormSubmit(value) {
        setHasUsername(true);
        setUsers([...users, value]);
        setPaused(false);
    }
    function handleGameComplete(lose, user, score) {
        if (lose) {
            //show GAME OVER 
            console.log("GAME OVER");
            return;
        }
        const newUser = {
            "id": users.length + 1,
            "username": user,
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
        if (value === null) {
            setScore(score - constantScoreDeduction);
        }
        else {
            setScore(score + value);
        }
    }
    return (
        <div className="container justify-content-center">
          <div className="row">
          
            <Username hasUsername={hasUsername} onSubmit={handleFormSubmit}/>
            <Timer hasUsername={hasUsername} gameOverLose={handleGameComplete} deductFromScore={handleScore}/>
            <Score score={score}/>
          </div>
          
            <GameContainer cards={cards} hasUsername={hasUsername} onGameComplete={handleGameComplete} addToScore={handleScore}/>
        </div>
    )
}

export default MemoryGame;