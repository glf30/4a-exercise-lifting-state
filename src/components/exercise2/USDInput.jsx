import React, {useState} from "react";

export default function USDInput() {
  const [usd, setUsd] = useState("");

  return (
    <div>
      <label>USD:</label>
      <input
        type="number"
        value={usd}
        onChange={(e) => setUsd(e.target.value)}
      />
    </div>
  );
}