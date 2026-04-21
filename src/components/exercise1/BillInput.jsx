import React, { useState } from "react";

const BillInput = () => {
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

export default BillInput;
