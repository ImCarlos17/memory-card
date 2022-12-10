import React from "react";
import Pictures from "../utils/PicturesCards";
import unqid from "unqid";

export default function Card({ name, img, id, checkSelectedCard }) {
  return (
    <React.Fragment>
      <div className="card box-shadow" key={id} id={name}>
        <div
          className="card-wrapper"
          id={name}
          onClick={(e) => checkSelectedCard(e.nativeEvent.target.id)}
        >
          <div className="container-picture">
            <img src={img} alt={name} className="picture-card" id={name}></img>
          </div>
          <br></br>
          <span>
            <strong id={name}>{name}</strong>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}
