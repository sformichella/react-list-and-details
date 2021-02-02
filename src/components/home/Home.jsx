import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Cool List Site</h1>
      <Link to="/list">List</Link>
    </div>
  );
}

