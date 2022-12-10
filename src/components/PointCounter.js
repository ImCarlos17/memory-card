import React, { useState, useEffect } from "react";

export default function PointCounter({ score, bestScore }) {
  return (
    <React.Fragment>
      <div className="score-game">
        <h4>Score: {score}</h4>
        <h4>Best score: {bestScore}</h4>
      </div>
    </React.Fragment>
  );
}
