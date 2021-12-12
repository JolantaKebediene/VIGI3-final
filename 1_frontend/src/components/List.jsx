import React, { useState, useEffect } from "react";
import axios from "axios";
import "./List.css";

const List = () => {
  // state
  const [users, setUsers] = useState([
    {
      name: "",
      surname: "",
      email: "",
      age: 0,
    },
  ]);

  // effect
  useEffect(() => {
    axios.get("http://localhost:8000/api/users").then((result) => {
      setUsers(result.data);
    });
  }, []);

  return (
    <div className="conteiner">
      <h2 className="heading"> Užsiregistravusių vartotojų sąrašas</h2>
      <table>
        <thead>
          <tr>
            <th>Vardas</th>
            <th>Pavardė</th>
            <th>El.Paštas</th>
            <th>Gimimo metai</th>
            <th>Atnaujinti</th>
            <th>Ištrinti</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.email}</td>
              <td>{new Date().getFullYear() - user.age}</td>
              <td>
                <button className="button">✏️</button>
              </td>
              <td>
                <button className="button">❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
