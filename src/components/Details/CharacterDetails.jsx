import React from "react";

export default function CharacterDetails({ name, photoUrl }) {
  return (
    <div>
      <h1>{ name }</h1>
      <img src={photoUrl}/>
    </div>
  );
}
