import React from "react";
function GameCard( {src, id, alt, scale, onClick, isFlipped, isMatched} ) {
    const backOfCard = "../public/images/mount-fuji.png";
    function handleClick() {
        onClick(id);
        
    }
    let className = "mx-auto card border-2 border-dark justify-content-center bg-white";
    if (isMatched) {
        console.log('is matched');
        className = "visually-hidden";
    }
    return (
 <div className="col-md-2 col-sm-3 col-6 m-auto py-2">
    <div id="card" className={className} onClick={handleClick}>
        <img src={isFlipped ? src : backOfCard} alt={alt} style={{scale: `${isFlipped ? scale : 100}%`}}></img>
    </div>
</div>

    )
}

export default GameCard;