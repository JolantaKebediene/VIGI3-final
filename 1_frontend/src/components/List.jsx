import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import "./List.css";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

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
  const [editFormData, setEditFormData] = useState({
    name: "",
    surname: "",
    email: "",
    age: 0,
  });
  const [editUserId, setEditUserId] = useState(null);
  const [messageEdit, setMessageEdit] = useState("");
  const [messageDelete, setMessageDelete] = useState("");
  const [requestData, setRequestData] = useState(new Date());

  // effect
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users")
      .then((res) => {
        setUsers(res.data);
        console.log(res.data.message);
      })
      .catch((err) => err.message);
  }, [requestData]);

  // functions

  const handleEditFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    const id = e.target.className;

    const editedUser = {
      _id: editUserId,
      name: editFormData.name,
      surname: editFormData.surname,
      email: editFormData.email,
      age: editFormData.age,
    };

    const newUsers = [...users];

    const index = users.findIndex((user) => user._id === editUserId);

    newUsers[index] = editedUser;

    setUsers(newUsers);
    setEditUserId(null);
    axios
      .put(`http://localhost:8000/api/users/${id}`, editedUser)
      .then((res) => {
        console.log(res.data.message);
        setMessageEdit("Vartotojas atnaujintas");
        setRequestData(new Date());
      })
      .catch((err) => err.message);
  };

  const handleEditClick = (e, user) => {
    e.preventDefault();
    const id = e.target.className;
    setEditUserId(id);

    setEditFormData({
      name: user.name,
      surname: user.surname,
      email: user.email,
      age: user.age,
    });
  };

  const handleCancelClick = () => {
    setEditUserId(null);
  };

  const hendleDeleteClick = (e) => {
    const id = e.target.className;
    axios
      .delete(`http://localhost:8000/api/users/${id}`)
      .then((res) => {
        console.log(res.data.message);
        setMessageDelete("Vartotojas ištrintas");
        setRequestData(new Date());
      })
      .catch((err) => err.message);
  };

  return (
    <div className="conteiner">
      <h2 className="heading"> Užsiregistravusių vartotojų sąrašas</h2>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Vardas</th>
              <th>Pavardė</th>
              <th>El.Paštas</th>
              <th>Gimimo metai</th>
              <th>Administravimo mygtukais</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <Fragment>
                {editUserId === user._id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    user={user}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={hendleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <p className="message">{messageEdit}</p>
      <p className="message">{messageDelete}</p>
    </div>
  );
};

export default List;
