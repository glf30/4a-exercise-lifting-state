import React, { useState } from "react";

export default function TipPercentageInput() {
  const [tip, setTip] = useState("");

  return (
    <div>
      <label>Tip Percentage:</label>
      <input
        type="number"
        value={tip}
        onChange={(e) => setTip(e.target.value)}
      />
    </div>
  );
}