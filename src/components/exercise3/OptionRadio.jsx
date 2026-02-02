import React, { useState } from "react";

export default function OptionRadio({ option }) {
  const [selected, setSelected] = useState(false);

  return (
    <div>
      <input
        type="radio"
        checked={selected}
        onChange={() => setSelected(!selected)}
      />
      <label>{option}</label>
    </div>
  );
}