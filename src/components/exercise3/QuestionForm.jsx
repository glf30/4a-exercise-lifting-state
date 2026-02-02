import React from "react";
import OptionRadio from "./OptionRadio";
import SelectionDisplay from "./SelectionDisplay";

export default function QuestionForm() {
  const options = ["A", "B", "C"];

   //Exercise 3 code
  
  return (
    <form>
      {options.map((opt) => (
        <OptionRadio key={opt} option={opt} />
      ))}
      <SelectionDisplay />
    </form>
  );
}
