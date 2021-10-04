import React from 'react';
import AddUser from './component/User/AddUser';
import UserList from './component/User/UserLists';


function App() {
  return (
    <div>
      <AddUser/>
      <UserList users = {[]}/>
    </div>
  );
}

export default App;


