import React, {useState, useEffect} from "react";
import GameContainer from "./GameContainer";
function MemoryGame() {
    const [cards, setCards] = useState([]);

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
        })
    }, [])

    return (
        <div >
            <GameContainer cards={cards}/>
        </div>
    )
}

export default MemoryGame;