import { useEffect, useState } from "react";

const Users = () => {
  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });

      console.log("run...")
  }, []);


  return (
    <ol className="list-disc mx-6">
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}

      {loading && <p>Loading....</p>}
    </ol>
  );
};

export default Users;
