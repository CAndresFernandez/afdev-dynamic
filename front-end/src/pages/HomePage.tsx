import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>
        <Link to="UserPage">Link</Link>
      </p>
    </>
  );
}
