import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

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
    const user = {
      name: input.name,
      surname: input.surname,
      email: input.email,
      age: +input.age,
    };

    axios.post("http://localhost:8000/api/users", user);
  }
  return (
    <div className="conteiner">
      <h1 className="heading">Registracijos forma</h1>
      <form className="form">
        <label className="form_label" htmlFor="userName">
          Vardas
        </label>
        <input
          className="form_input"
          onChange={handleChange}
          type="text"
          name="name"
          value={input.name}
        ></input>
        <label className="form_label" htmlFor="userSurname">
          Pavardė
        </label>
        <input
          className="form_input"
          onChange={handleChange}
          type="text"
          name="surname"
          value={input.surname}
        ></input>
        <label className="form_label" htmlFor="userEmail">
          El.Paštas
        </label>
        <input
          className="form_input"
          onChange={handleChange}
          type="email"
          name="email"
          value={input.email}
        ></input>
        <label className="form_label" htmlFor="userAge">
          Amžius
        </label>
        <input
          className="form_input"
          onChange={handleChange}
          type="number"
          name="age"
          value={input.age}
        ></input>
        <button
          className="button form_button"
          onClick={handleClick}
          type="submit"
        >
          Registruoti
        </button>
      </form>
    </div>
  );
};

export default Form;
