import React, { useState } from "react";
import "./styles.css";
function ChipsInput() {
  const [chipInput, setChipInput] = useState("");
  const [chipsData, setChipsData] = useState([]);
  const handleInput = (e) => {
    setChipInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      const newChip = {
        id: Date.now(),
        chip: chipInput,
      };
      setChipsData((prev) => [...prev, newChip]);
      setChipInput("");
      console.log(newChip);
    }
  };
  console.log("chipsData", chipsData);
  const handleRemove = (id) => {
    setChipsData((prev) => prev.filter((eachChip) => eachChip.id !== id));
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0",
      }}
    >
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px", marginBottom: "30px" }}
        value={chipInput}
        onChange={handleInput}
        onKeyDown={handleKeyPress}
      />
      <div style={{ display: "flex", gap: "10px" }}>
        {chipsData.map((eachChip) => (
          <div
            key={eachChip.id}
            style={{
              border: "1px solid black",
              borderRadius: "20px",
              padding: "5px 10px",
              minWidth: "40px",
            }}
          >
            <span>{eachChip.chip}</span>
            <span
              style={{ color: "red", marginLeft: "10px" }}
              onClick={() => handleRemove(eachChip.id)}
            >
              X
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChipsInput;
