import React, { Component } from "react";
import getCharacters from "../../services/avatarAPI";

export default class List extends Component {

  state = {
    characters: []
  }

  componentDidMount() {
    getCharacters().then(characters => this.setState({ characters }));
  }

  render() {
    return (
      <ul>
        {
          this.state.characters.map(char => {
            return <li key={char._id}>{char.name}</li>;
          })
        }
      </ul>
    );
  }
}
