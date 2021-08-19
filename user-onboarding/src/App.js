import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const initialUsers = [
    {
      name: "",
      email: "",
      password: "",
      role: "",
      tosCheck: true,
    },
  ];
  const [users, setUsers] = useState(initialUsers);

  const submit = (user) => {
    console.groupCollapsed("submit()");
    console.log(user);
    setUsers([...users, user]);
    console.groupEnd();
  };

  return (
    <div className="App">
      <h1>Create an Account</h1>
      <Form submit={submit} />
      {users.map((user, index) => (
        <div className="user" key={index}>
          <h2>{user.name}</h2>
          <a href="#">{user.email}</a>
        </div>
      ))}
    </div>
  );
}
export default App;