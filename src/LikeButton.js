import React, { useState } from "react";

function LikeButton() {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const buttonStyle = {
    backgroundColor: "red",
    color: "white",
  };
  const hoveredStyle = {
    backgroundColor: "white",
    color: "red",
    border: "1px solid red",
  };
  const defaultStyle = {
    backgroundColor: "white",
    color: "black",
    border: "1px solid black",
  };
  return (
    <button
      style={isClicked ? buttonStyle : isHovered ? hoveredStyle : defaultStyle}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      ❤️ Like
    </button>
  );
}

export default LikeButton;
