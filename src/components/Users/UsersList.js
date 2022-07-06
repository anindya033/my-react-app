import React from "react";
import Card from "../UI/Card";
import classes from './UsersList.module.css'

const UsersList = (props) => {
    console.log("userList >>>");
    console.log(props);
  return (
    <Card
    cssClass = {classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.key}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
