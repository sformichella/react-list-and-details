import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

export default function CharacterList({ characters }) {
  return (
    <ul>
      {
        characters.map(char => {
          return <li key={char._id}>
            <Link to={`/list/${char._id}`}>{char.name}</Link>
          </li>;
        })
      }
    </ul>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired
  })).isRequired
};
