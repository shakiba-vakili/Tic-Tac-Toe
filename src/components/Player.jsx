import React, { useState } from "react";

const Player = ({ name, symbol, handelEditClick }) => {
  const [isEditing, setIsEditing] = useState(false);
  function handelEditClick() {
    setIsEditing(true);
  }
  let playerName = <span className="player-name">{name}</span>;
  if (isEditing) {
    playerName = <input type="text" required />;
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handelEditClick}>edit</button>
    </li>
  );
};

export default Player;
