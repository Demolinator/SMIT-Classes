import { useEffect, useState } from "react";

const Users = () => {
  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState("");

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUsers(data);
  //       setLoading(false);
  //     });

  //     console.log("run...")
  // }, []);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();
        setUsers(data);
        console.log(response);
      } catch (err) {
        setError(err.toString());
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
    console.log("run...");
  }, []);

  return (
    <ol className="list-disc mx-6">
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}

      {loading && <p>Loading....</p>}
      {error && <p>{error}</p>}
    </ol>
  );
};

export default Users;
