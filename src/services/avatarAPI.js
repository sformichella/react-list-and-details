const API_URL = "https://last-airbender-api.herokuapp.com/api/v1/";
const characters = "characters";

const getCharacters = () => {
  return fetch(API_URL + characters)
    .then(res => res.json());
};

export default getCharacters;
