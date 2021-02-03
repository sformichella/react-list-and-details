import React, { Component } from "react";
import CharacterList from "./CharacterList.jsx";
import { getCharacters } from "../../services/avatarAPI.js";

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
