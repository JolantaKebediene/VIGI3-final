import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          name="Name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          name="surname"
          value={editFormData.surname}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          name="age"
          value={editFormData.age}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Išsaugoti</button>
        <button type="button" onClick={handleCancelClick}>
          Atšaukti
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
