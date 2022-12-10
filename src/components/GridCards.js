import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function GridCards({ picturesCard, checkSelectedCard }) {
  return (
    <React.Fragment>
      <div className="grid-cards">
        {picturesCard.map((picture) => (
          <Card
            name={picture.name}
            img={picture.img}
            key={picture.id}
            checkSelectedCard={checkSelectedCard}
          />
        ))}
      </div>
    </React.Fragment>
  );
}
