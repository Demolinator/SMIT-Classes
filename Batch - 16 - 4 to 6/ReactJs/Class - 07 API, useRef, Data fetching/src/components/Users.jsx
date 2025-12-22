import { useState } from "react";

const Users = () => {
  let [users, setUsers] = useState([]);

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => setUsers(data));
  return (
    <div>
      {users.map((user) => (
          <li id={user.id}>{user.name}</li>
      ))}
    </div>
  );
};

export default Users;
