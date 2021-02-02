const API_URL = "https://last-airbender-api.herokuapp.com/api/v1/";

const getCharacters = () => {
  return fetch(API_URL + "characters")
    .then(res => res.json());
};

const getCharacter = id => {
  return fetch(API_URL + `character/${id}`)
    .then(res => res.json());
};

export {
  getCharacters,
  getCharacter
};
