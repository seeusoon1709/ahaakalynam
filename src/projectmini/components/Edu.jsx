import React from "react";
import "./edu.css";
function Edu() {
  return (
    <div className="Edu">
      <h1>Education & Occupation</h1>
      <hr />
      <div className="quali">
        <label>Hightest Qualification</label>
        <input type="text" id="quali" name="quali" />
      </div>
      <div className="emp">
        <label>Emplyee type</label>
        <input type="text" id="emp type" />
      </div>
      <div className="occu">
        <label>Occupation</label>
        <input type="text" id="occu" />
      </div>
      <div className="income">
        <label>Monthly income</label>
        <input type="number" id="income" />
      </div>
    </div>
  );
}
export default Edu;
