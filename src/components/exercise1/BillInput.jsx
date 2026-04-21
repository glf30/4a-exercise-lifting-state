import React, { useState } from "react";

export default function BillInput() {
  const [bill, setBill] = useState(0);

  return (
    <div>
      <label>Bill Amount:</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
    </div>
  );
}
