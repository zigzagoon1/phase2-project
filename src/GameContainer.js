import React, {useState} from "react";
import GameCard from "./GameCard";
function GameContainer( {cards} ) {
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);

    function handleClick(id) {
        console.log(id);
        const card = cards.find((one) => {
            return one.id === id
        });
        console.log(card);
        console.log('click');

        if (flippedCards.length < 2) {
        setFlippedCards([...flippedCards, card]);
        console.log(flippedCards)
        }

        if (flippedCards.length === 1) {
            if (card.name === flippedCards[0].name) {
                //match!
                //add to score
                //remove cards
                //play sound
                console.log('match');
            }
            else {
                setTimeout(() => {
                    setFlippedCards([]);
                }, 1000);
            }
        }
    }

    let i = 1;
    let cardElements = cards.map((card) => {
        return <GameCard key={Math.random()} id={card.id}
         src={card.src} alt={card.name} scale={card.scale} isFlipped={flippedCards.includes(card)}isMatched={matchedCards.some((matchedCard) => matchedCard.id === card.id)}onClick={handleClick}/>
         
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