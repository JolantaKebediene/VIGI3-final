import React from "react";

const ReadOnlyRow = ({ user, handleEditClick, handleDeleteClick }) => {
  return (
    <tr key={user._id}>
      <td>{user.name}</td>
      <td>{user.surname}</td>
      <td>{user.email}</td>
      <td>{new Date().getFullYear() - user.age}</td>
      <td>
        <button className={user._id} onClick={handleEditClick}>Atnaujinti</button>
        <button className={user._id} onClick={handleDeleteClick}>
          Ištrinti
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
