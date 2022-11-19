import React from "react";
import Card from "../UI/Card";
import styles from "./UsersList.module.css";

function UsersList(props) {
  return (
    <Card className={styles.users}>
      <ul>
        {props.user.map((user) => (
          <li key={user.id}>{`${user.name} - ${user.age} year(s) old`}</li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
