import React, { useState } from "react";

export default function EURInput() {
  const [eur, setEur] = useState(0);

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
