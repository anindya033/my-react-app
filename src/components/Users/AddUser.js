import React from "react";
import Card from "../UI/Card";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input type={Text} id="username" />
        <label htmlFor="age">age</label>
        <input type={Number} id="age" />
        <input type={"submit"} value="Add User" />
      </form>
    </Card>
  );
};

export default AddUser;
