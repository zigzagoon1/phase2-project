import React, {useState, useContext} from "react";
import GameCard from "./GameCard";
import { PauseContext } from "./context/paused";
import { UsernameContext } from "./context/username";
function GameContainer( {cards, onGameComplete, addToScore, time} ) {
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [paused, setPaused] = useContext(PauseContext);
    const [username, hasUsername] = useContext(UsernameContext);
    function handleClick(id) { 
        if (username && !paused) {
            const card = cards.find((one) => {
                return one.id === id
            });
    
            if (flippedCards.length < 2) {
            setFlippedCards([...flippedCards, card]);
            }
    
            if (flippedCards.length === 1) {
                if (card.name === flippedCards[0].name && card !== flippedCards[0]) {
                    //match!
                    addToScore(150);
                    setMatchedCards([...matchedCards, card, flippedCards[0]]);
                    setFlippedCards([]);
                    //play sound
                    console.log('match');
                    if (matchedCards.length === cards.length) {
                        console.log('YOU WIN!');
                    }
                }
                else {
                    setTimeout(() => {
                        setFlippedCards([]);
                    }, 1500);
                }
            }
        }
        
    }

    let cardElements = cards.map((card) => {
        return <GameCard key={Math.random()} id={card.id}
         src={card.src} alt={card.name} scale={card.scale} isFlipped={flippedCards.includes(card)}
         isMatched={matchedCards.some((matchedCard) => matchedCard.id === card.id)} onClick={handleClick}/>  
    })
    return (
      <div className="container-fluid border bg-success">
        <div className="row">
            {cardElements}
        </div>
      </div>
    )
}
export default GameContainer;