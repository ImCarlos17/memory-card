import React from "react";
import TitleGame from "./TitleGame";
import PointCounter from "./PointCounter";

export default function Header(props) {
  const { score, bestScore } = props;

  return (
    <React.Fragment>
      <div className="header">
        <TitleGame />
        <PointCounter score={score} bestScore={bestScore} />
      </div>
    </React.Fragment>
  );
}
