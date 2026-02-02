import React, { useState } from "react";

export default function EURInput() {
  const [eur, setEur] = useState("");

  return (
    <div>
      <label>EUR:</label>
      <input
        type="number"
        value={eur}
        onChange={(e) => setEur(e.target.value)}
      />
    </div>
  );
}