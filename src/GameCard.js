import React, {useState} from "react";
import {Card} from "semantic-ui-react"
function GameCard( {src, alt, scale, frontSrc, onClick} ) {
    const [front, setFront] = useState(false);
    
    function handleClick() {
        setFront(!front);
        onClick(alt);
    }
 
    return (
    <div className="col card border-2 border-dark col-1 justify-content-center bg-white" onClick={handleClick}>
        <img src={front ? frontSrc : src} alt={alt} style={{scale: `${scale}%`}}></img>
    </div>

    )
}

export default GameCard;