import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

function AddUser(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  function setUsernameInput(event) {
    setUsername(event.target.value);
  }

  function setAgeInput(event) {
    setAge(event.target.value);
  }

  function formSubmitHandler(event) {
    event.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid username & age",
        message: "Username and age input fields are empty.",
      });
    }

    if (+age < 0) {
      setError({
        title: "Invalid age",
        message: "Age is invalid.",
      });
    }

    props.onAddUser(username, age);

    setUsername("");
    setAge("");
  }

  function errorHandler() {
    setError(null);
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            placeholder="e.g. jSmith"
            onChange={setUsernameInput}
            value={username}
          ></input>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            placeholder="e.g. 28"
            onChange={setAgeInput}
            value={age}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
