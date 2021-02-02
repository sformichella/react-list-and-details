import React from "react"

export default function CharacterList({ characters }) {
  return (
    <ul>
      {
        characters.map(char => {
          return <li key={char._id}>{char.name}</li>;
        })
      }
    </ul>
  );
}
