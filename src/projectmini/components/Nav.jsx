import React from "react";
import "./Nav.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
function Nav() {
  return (
    <div className="secnav">
      <h1>Profile Registration </h1>
      <div className="check">
        <p>
          <CheckCircleOutlineIcon />
          Basic infomation
        </p>

        <p>
          <CheckCircleOutlineIcon />
          Physical Characteristics
        </p>

        <p>
          <CheckCircleOutlineIcon />
          Education & Occupation
        </p>

        <p>
          <CheckCircleOutlineIcon />
          Astrological Infomation
        </p>

        <p>
          <CheckCircleOutlineIcon />
          Habit
        </p>

        <p>
          <CheckCircleOutlineIcon />
          Description
        </p>
      </div>
    </div>
  );
}
export default Nav;
