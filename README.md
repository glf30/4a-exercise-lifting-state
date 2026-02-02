# Lifting State — Refactoring Exercises

This repo includes three small React apps. Each one runs, but the state is in the wrong place. As a result, parts of the UI fall out of sync. Your job is to refactor the components so the shared state lives in the right parent and all pieces of the UI update together.

Starter code for all three exercises is provided.

---

## 1. Tip Calculator  
The user enters a bill amount and a tip percentage. A total should update as they type.  
Right now, each component keeps its own state, so the total never reflects the inputs.

Refactor so the inputs and the total stay connected.

---

## 2. Currency Converter  
There are two inputs, one for USD and one for EUR. Typing into either one should update the other.  
Currently, each input stores its own value, so they drift apart immediately.

Refactor so both values come from shared state and always stay in sync.

---

## 3. Quiz Form  
A simple multiple-choice form with three radio buttons and a display showing the selected answer.  
At the moment, each radio button tracks itself, so multiple options can appear “selected,” and the display never updates.

Refactor so one source of truth controls the selection and the UI behaves like a real radio group.
