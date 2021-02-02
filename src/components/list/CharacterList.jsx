import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

export default function CharacterList({ characters }) {
  return (
    <ul>
      {
        characters.map(char => {

          const { _id: id, name } = char;
          const details = {
            pathname: `/list/${id}`,
            state: { characterId: id }
          };

          return (
            <li key={id}>
              <Link to={ details }>{ name }</Link>
            </li>
          );
        })
      }
    </ul>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
};
