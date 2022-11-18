import React from "react";
import "./Physical.css";

function Physical() {
  return (
    <div className="physical">
      <h1>Physical Characterics</h1>
      <hr />
      <div className="height">
        {" "}
        <label>Height/in cms</label>
        <input type="number" />
      </div>
      <div className="weight">
        <label>Weight/in kg</label>
        <input type="number" />
      </div>
      <div className="type">
        <label>Body type</label>
        <select>
          <option value="type">Select Body type</option>
          <option value="Athletic">Athletic</option>
          <option value="heavy">Heavy</option>
          <option value="slim">Slim</option>
          <option value="ave">Average</option>
        </select>
      </div>
      <div className="com">
        <label>Complexion</label>
        <select>
          <option value="complexion">Select Complexion</option>
          <option value="Dark">Dark</option>
          <option value="fair">Fair</option>
          <option value="Very fair">very fair</option>
          <option value="medium">Medium</option>
        </select>
      </div>
    </div>
  );
}
export default Physical;
