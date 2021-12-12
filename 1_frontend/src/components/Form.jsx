import React, { useState } from "react";

const Form = () => {
  // state
  const [input, setInput] = useState({
    name: "",
    surname: "",
    email: "",
    age: 0,
  });
  // custom function
  function handleChange(e) {
    const { name, value } = e.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(e) {
    e.preventDefault();
    console.log(input);
  }
  return (
    <div>
      <h1>Registracijos forma</h1>
      <form>
        <label htmlFor="userName">Vardas</label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={input.name}
        ></input>
        <label htmlFor="userSurname">Pavardė</label>
        <input
          onChange={handleChange}
          type="text"
          name="surname"
          value={input.surname}
        ></input>
        <label htmlFor="userEmail">El.Paštas</label>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          value={input.email}
        ></input>
        <label htmlFor="userAge">Amžius</label>
        <input
          onChange={handleChange}
          type="number"
          name="age"
          value={input.age}
        ></input>
        <button onClick={handleClick} type="submit">
          Registruoti
        </button>
      </form>
    </div>
  );
};

export default Form;
