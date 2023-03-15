import React, { useState, useContext, useMemo, useCallback, useEffect } from "react";
import GameCard from "./GameCard";
import { PauseContext } from "./context/paused";
import { UsernameContext } from "./context/username";
import { flip } from "@popperjs/core";

function GameContainer({ cards, onGameComplete, addToScore, time }) {
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [paused, setPaused] = useContext(PauseContext);
  const [username, hasUsername] = useContext(UsernameContext);
  const [firstCardId, setFirstCardId] = useState(null);

  const handleClick = useCallback(
    (card) => {
      if (paused) {
        setPaused(false);
      }
      if (username && !paused) {
        if (flippedCards.length < 2 && card.id !== firstCardId) {
          setFlippedCards((cards) => [...cards, card.id]);

          if (flippedCards.length === 0) {
            setFirstCardId(card.id);
          }
        }
      }
    },
    [flippedCards, firstCardId, paused, setPaused, username]
  );

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCardId, secondCardId] = flippedCards;
      const firstCard = cards.find((card) => card.id === firstCardId);
      const secondCard = cards.find((card) => card.id === secondCardId);

      if (firstCard.name === secondCard.name) {
        // match!
        addToScore(150);
        setMatchedCards((cards) => [...cards, firstCard, secondCard]);
        setFlippedCards([]);
        setFirstCardId(null);
        console.log("match");
        if (matchedCards.length === cards.length) {
          console.log("YOU WIN!");
        }
      } else {
        setTimeout(() => {
          setFlippedCards([]);
          setFirstCardId(null);
        }, 1500);
      }
    }
  }, [cards, flippedCards, matchedCards, addToScore]);

  const cardElements = useMemo(
    () =>
      cards.map((card) => (
        <GameCard
          key={card.id}
          id={card.id}
          src={card.src}
          alt={card.name}
          scale={card.scale}
          isFlipped={flippedCards.includes(card.id)}
          isMatched={matchedCards.some((matchedCard) => matchedCard.id === card.id)}
          onClick={handleClick} /> )), [cards, flippedCards, matchedCards, handleClick]);

          return (
            <div className="container-fluid border bg-success">
            <div className="row">{cardElements}</div>
            </div>
            );
            }
            
            export default GameContainer;
          
