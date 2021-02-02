import React from "react";
import PropTypes from "prop-types";

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

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired
  })).isRequired
};
