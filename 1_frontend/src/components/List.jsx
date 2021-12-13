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
  const [messageEdit, setMessageEdit] = useState("");
  const [messageDelete, setMessageDelete] = useState("");

  // effect
  useEffect(() => {
    axios.get("http://localhost:8000/api/users").then((result) => {
      setUsers(result.data);
    });
  }, []);

  // functions
  const editUser = (e) => {
    const id = e.target.className;
    axios.put(`http://localhost:8000/api/users/${id}`);
    setMessageEdit("Vartotojas sekmingai atnaujintas");
  };

  const deleteUser = (e) => {
    const id = e.target.className;
    axios.delete(`http://localhost:8000/api/users/${id}`);
    setMessageDelete("Vartotojas ištrintas");
  };

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
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.email}</td>
              <td>{new Date().getFullYear() - user.age}</td>
              <td>
                <button className={user._id} onClick={editUser}>
                  ✏️
                </button>
              </td>
              <td>
                <button className={user._id} onClick={deleteUser}>
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="message">{messageEdit}</p>
      <p className="message">{messageDelete}</p>
    </div>
  );
};

export default List;
