import React, { Component } from "react";
import CharacterList from "./CharacterList";
import getCharacters from "../../services/avatarAPI";

export default class List extends Component {

  state = {
    characters: []
  }

  componentDidMount() {
    getCharacters().then(characters => this.setState({ characters }));
  }

  render() {

    const { characters } = this.state;

    return (
      <CharacterList characters={characters}/>
    );
  }
}
