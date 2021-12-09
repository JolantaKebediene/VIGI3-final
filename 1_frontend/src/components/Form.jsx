import React from "react";

const Form = () => {
  return (
    <div>
      <h1>Registracijos forma</h1>
      <form>
        <label for="name">Vardas</label>
        <input type="text"></input>
        <label for="surname">Pavardė</label>
        <input type="text"></input>
        <label for="email">El.Paštas</label>
        <input type="email"></input>
        <label for="age">Amžius</label>
        <input type="number"></input>
        <button type="submit">Registruoti</button>
      </form>
    </div>
  );
};

export default Form;
