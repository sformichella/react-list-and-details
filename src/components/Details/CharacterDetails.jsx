import React from "react";
import PropTypes from "prop-types";

export default function CharacterDetails({ name, photoUrl }) {
  return (
    <div>
      <h1>{ name }</h1>
      <img src={photoUrl}/>
    </div>
  );
}

CharacterDetails.propTypes = {
  name: PropTypes.string,
  photoUrl: PropTypes.string
};
