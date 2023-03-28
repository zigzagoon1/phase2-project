import React, { useState, useContext, useMemo, useCallback, useEffect, useRef } from "react";
import GameCard from "./GameCard";
import { PauseContext } from "./context/paused";
import { UsernameContext } from "./context/username";

function GameContainer({ cards, onGameComplete, addToScore, timeUp }) {
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [paused, setPaused] = useContext(PauseContext);
  const [username] = useContext(UsernameContext);
  const [firstCardId, setFirstCardId] = useState(null);
  
  const prevMatch = useRef(0);

  if (timeUp) {
    setPaused(true);
  }
  const handleClick = useCallback(
    (card) => {
      console.log(timeUp);
      if (paused && !timeUp) {
        console.log(timeUp);
        setPaused(false);
      }
      if (username && !paused && !timeUp) {
        if (flippedCards.length < 2 && card.id !== firstCardId) {
          setFlippedCards((cards) => [...cards, card.id]);

          if (flippedCards.length === 0) {
            setFirstCardId(card.id);
          }
        }
      }
      else if (timeUp) {
        setPaused(true);
      }
    },
    [flippedCards, firstCardId, paused, setPaused, username, timeUp]
  );

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCardId, secondCardId] = flippedCards;
      const firstCard = cards.find((card) => card.id === firstCardId);
      const secondCard = cards.find((card) => card.id === secondCardId);

      if (firstCard.name === secondCard.name) {
        // match!
        setTimeout(() => {
            prevMatch.current += 1;
            if (prevMatch.current > 1) {
              addToScore(300);
            }
            else {
            addToScore(150);
            }
            setMatchedCards((cards) => [...cards, firstCard, secondCard]);
            if (matchedCards.length === 30) {
                onGameComplete(false);
            }
            setFlippedCards([]);
            setFirstCardId(null);
            console.log("match");
            if (matchedCards.length === cards.length) {
              console.log("YOU WIN!");
            }
        },1000)

      } else {
        setTimeout(() => {
          prevMatch.current = 0;
          setFlippedCards([]);
          setFirstCardId(null);
        }, 1500);
      }
    }
  }, [cards, flippedCards, matchedCards, addToScore, onGameComplete]);

  const cardElements = useMemo(
    () =>
      cards.map((card) => (
        <GameCard
          key={card.id}
          id={card.id}
          src={card.src}
          alt={card.name}
          scale={card.scale}
          timeUp={timeUp}
          isFlipped={flippedCards.includes(card.id)}
          numFlipped={flippedCards.length}
          isMatched={matchedCards.some((matchedCard) => matchedCard.id === card.id)}
          onClick={handleClick} /> )), [cards, flippedCards, matchedCards, handleClick, timeUp]);
          return (
            <div className="container-fluid border bg-success">
                <div className="row">{cardElements}</div>
            </div>
            );
            }
            
            export default GameContainer;
          
