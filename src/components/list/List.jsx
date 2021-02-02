import React from "react";

const avatarAPI = "https://last-airbender-api.herokuapp.com/api/v1/";
const characters = "characters";

export default function List() {

  const sample = fetch(avatarAPI + characters)
    .then(res => res.json())


  return (
    <div>
      This is the list page.
    </div>
  );
}
