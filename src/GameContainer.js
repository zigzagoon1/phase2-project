import React from "react";
import { Card } from "semantic-ui-react";
import GameCard from "./GameCard";
function GameContainer( {cards} ) {
    const cardElements = cards.map((card) => {
        return <GameCard key={card.id} src={card.src} alt={card.name} scale={card.scale} onClick={handleClick}/>
    })
    function handleClick() {

    }
    function shuffleCards() {
        for (let i = 0; i < cardElements.length; i++) {
             
        }
    }
    return (
      <div className="container bg-success">
        <div className="row row-cols-6">
            {cardElements}
        </div>
      </div>
    )
}

export default GameContainer;