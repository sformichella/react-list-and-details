import React, { Component } from "react";
import PropTypes from "prop-types";
import { getCharacter } from "../../services/avatarAPI.js";

import CharacterDetails from "./CharacterDetails.jsx";

export default class Details extends Component {

  state = {
    character: {}
  }

  componentDidMount() {
    const { id: characterId } = this.props.match.params;

    getCharacter(characterId).then(character => this.setState({ character }));
  }

  render() {

    const { character } = this.state;

    return (
      <CharacterDetails {...character}/>
    );
  }
}

Details.propTypes = {
  match: PropTypes.object.isRequired
};
