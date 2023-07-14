import { useState } from "react";

export default function MadLib() {
  const [word, setWord] = useState("Snow White");

  function handleClick() {
    setWord(function(w) {
      return w === "Snow White" ? "Cinderella" : "Snow White";
    });
  }

  return (
    <>
      <h1>Once upon a time there was a beautiful young princess named {word}</h1>
      <button onClick={handleClick}>Add a cherry</button>
    </>
  );
}
