import React, { Component } from "react";
import PropTypes from "prop-types";
import { getCharacter } from "../../services/avatarAPI";

import CharacterDetails from "./CharacterDetails";

export default class Details extends Component {

  state = {
    character: {}
  }

  componentDidMount() {
    const { characterId } = this.props.location.state;

    getCharacter(characterId).then(character => this.setState({ character }));
  }

  render() {

    const { character } = this.state;

    return (
      <CharacterDetails character={character}/>
    );
  }
}

Details.propTypes = {
  location: PropTypes.object.isRequired
};
