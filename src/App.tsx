import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  let [users, setUser] = useState<User[]>([]);
  let [error, setError] = useState("");
  let [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUser(res.data), setLoading(false);
      })
      .catch((err) => {
        setError(err.message), setLoading(false);
      });
  }, []);

  // delete
  let deleteUser = (user: User) => {
    const originalUser = [...users];
    setUser(users.filter((u) => u.id != user.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setError(err.message), setUser(originalUser);
      });
  };

  // add
  let addUser = () => {
    let newUser = { id: 0, name: "Mosh" };
    let originalUser = [...users];
    setUser([newUser, ...users]);

    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((res) => {
        setUser([res.data, ...users]);
      })
      .catch((err) => {
        setError(err.message);
        setUser(originalUser);
      });
  };

  // update
  let update = (user: User) => {
    let originalUser = [...users];
    let updatedUser = { ...user, name: user.name + "!" };
    setUser(users.map((u) => (u.id === user.id ? updatedUser : u)));

    axios
      .patch(
        "https://jsonplaceholder.typicode.com/users/" + user.id,
        updatedUser
      )
      .catch((err) => {
        setUser(originalUser), setError(err.message);
      });
  };

  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-4" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}{" "}
            <div>
              <button
                className="btn btn-primary mx-1"
                onClick={() => {
                  update(user);
                }}
              >
                Update
              </button>
              <button
                className="btn btn-danger"
                onClick={() => {
                  deleteUser(user);
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
