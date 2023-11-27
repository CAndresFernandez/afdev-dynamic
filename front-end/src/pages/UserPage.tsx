import React from "react";
import { useParams } from "react-router-dom";
export default function UserPage() {
  const { id } = useParams();
  return (
    <>
      <h1>Hello there user {id}</h1>
      <p>This is your User profile page</p>
    </>
  );
}
