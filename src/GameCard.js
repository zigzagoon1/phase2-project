import React, {useState} from "react";
function GameCard( {src, id, alt, scale, onClick, isFlipped} ) {
    const [front, setFront] = useState(isFlipped);
    
    const backOfCard = "../public/images/mount-fuji.png";

    function handleClick() {
        console.log(id);
        setFront(isFlipped);
        onClick(id);
    }
 
    return (
 <div className="col-md-2 col-sm-3 col-6 m-auto py-3">
    <div className="mx-auto card border-2 border-dark justify-content-center bg-white" onClick={handleClick}>
        <img src={front ? src : backOfCard} alt={alt} style={{scale: `${front ? scale : 100}%`}}></img>
    </div>
</div>

    )
}

export default GameCard;