import React, {useState, useEffect} from "react";
import GameContainer from "./GameContainer";
function MemoryGame() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/memory-card-images')
        .then(r => r.json())
        .then((cards) => setCards(cards));
    }, [])

    return (
        <div>
            <GameContainer cards={cards}/>
        </div>
    )
}

export default MemoryGame;