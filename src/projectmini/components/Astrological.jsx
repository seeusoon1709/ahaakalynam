import React from "react";
import "./Astro.css";
function Astro() {
  return (
    <>
      <div>
        <h1>Astrological information</h1>
        <hr />
        <div className="star">
          <label>Star</label>
          <input type="text" id="star" />
        </div>
        <div className="raasi">
          <label>Raasi</label>
          <input type="text" id="raasi" />
        </div>
        <div className="dosham">
          <label>Chevvai Dosham</label>
          <input type="text" id="Dosham" />
        </div>
      </div>
    </>
  );
}
export default Astro;
// import * as React from "react";

// const App = () => {
//   const options = [
//     { label: "star", value: "star" },

//     { label: "raasi", value: "raasi" },

//     { label: "Chevvai Dosham", value: "chevvai Dosham" },
//   ];

//   const [value, setValue] = React.useState("");

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   return (
//     <div>
//       <Dropdown
//         label="Astrology"
//         options={options}
//         value={value}
//         onChange={handleChange}
//       />
//     </div>
//   );
// };

// const Dropdown = ({ label, value, options, onChange }) => {
//   return (
//     <label>
//       {label}

//       <select value={value} onChange={onChange}>
//         {options.map((option) => (
//           <option value={option.value}>{option.label}</option>
//         ))}
//       </select>
//     </label>
//   );
// };

// export default App;
