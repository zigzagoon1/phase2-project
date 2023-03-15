import React, {useState} from "react";

function GameCard({ src, id, alt, scale, onClick, isFlipped, isMatched }) {
  const backOfCard = "../public/images/mount-fuji.png";
    const [front, setFront] = useState(false);
  function handleClick() {
    onClick({ id, name: alt });
    setTimeout(() => {
    setFront(!front);
    }, 200);
  }

  

  let className = "mx-auto card border-2 border-dark justify-content-center bg-white";
  if (isMatched) {
    console.log("is matched");
    className = "visually-hidden";
  }
  if (isFlipped) {
    className += " flip";
  }
  else if (!isFlipped && front === true) {
    setTimeout(() => {
    setFront(false);
    }, 200)
  }


  return (
    <div className="col-md-2 col-sm-3 col-6 m-auto py-2">
      <div id="card" className={className} onClick={handleClick}>
        <img
          src={front ? src : backOfCard}
          alt={alt}
          style={{ scale: `${front ? scale : 100}%` }}
        />
      </div>
    </div>
  );
}

export default React.memo(GameCard);
