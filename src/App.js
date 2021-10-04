import React, { useState } from "react";

import AddUser from "./component/User/AddUser";
import UsersList from "./component/User/UserLists";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAdduser={addUserHandler} />

      <UsersList users={usersList} />
    </div>
  );
}

export default App;
