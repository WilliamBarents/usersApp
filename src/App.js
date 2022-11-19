import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [addUser, setAddUser] = useState([]);

  function addUserHandler(userName, userAge) {
    setAddUser((prev) => {
      return [...prev, { name: userName, age: userAge, id: Math.random() }];
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList user={addUser} />
    </div>
  );
}

export default App;
