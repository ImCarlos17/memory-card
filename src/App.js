import "./App.css";
import GridCards from "./components/GridCards";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";
import Pictures from "./utils/PicturesCards";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [pictures, setPictures] = useState(Pictures);
  const [playerCards, setPlayeCards] = useState([]);

  const incrementScore = () => setScore(score + 1);

  const randomize = () => {
    const newStatePictures = pictures.sort(() => Math.random() - 0.5);
    return newStatePictures;
  };

  const compareScore = () => {
    if (score > bestScore) {
      setBestScore(score);
    }
  };

  const wonRound = (cardSelect) => {
    setPlayeCards([...playerCards, cardSelect]);
    incrementScore();
  };

  const gameOver = () => {
    compareScore();
    setScore(0);
    setPlayeCards([]);
  };

  const checkSelectedCards = (cardSelect) => {
    playerCards.some((card) => card === cardSelect)
      ? gameOver()
      : wonRound(cardSelect);
  };

  useEffect(() => {
    setPictures(randomize());
  }, [score]);

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore} />
      <GridCards
        picturesCard={pictures}
        checkSelectedCard={checkSelectedCards}
      />
    </div>
  );
}

export default App;
