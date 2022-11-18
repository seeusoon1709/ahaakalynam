import React from "react";
import "./basic.css";

function Info() {
  return (
    <>
      <div className="basicinfo">
        <h1> Basic Information</h1>
        <hr id="line" />
        <div className="email">
          <label>Email-Id</label>
          <input type="email" id="mail" />
        </div>
        <div className="gender">
          <label> Gender*</label>
          <select name="gender" id="info">
            <option value="gender">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <br />
        </div>
        <div className="Marital">
          <label> Marital Status*</label>
          <select>
            <option value=" marital">Marital </option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="widower">Widower</option>
            <option value="divorced">Divorced</option>
          </select>
          <br />
        </div>
        <div className="Birth">
          <label>Date of birth</label>
          <input type="date"></input>
          <br />
        </div>
        <div className="country">
          <label>Country of residence*</label>
          <select>
            <option value="country">Select Country....</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="America">America</option>
            <option value="Brazil">Brazil</option>
            <option value="california">california</option>
            <option value="iran">iran</option>
            <option value="finland">finland</option>
            <option value="russia">russia</option>
            <option value="india">india</option>
            <option value="pakistan">pakistan</option>
            <option value="england">england</option>
            <option value="bangladesh">Bangladesh</option>
            <option value="france">France</option>
          </select>
          <br />
        </div>
        <div className="state">
          <label>State of residence</label>
          <select>
            <option value="State">Select State...</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadar and Nagar Haveli">
              Dadar and Nagar Haveli
            </option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>
          <br />
        </div>
        <div className="no">
          <label>phone number</label>
          <input type="number" id="no" name="num" />
        </div>
        <div className="pin">
          <label>Pincode</label>
          <input type="number" id="pin" name="pincode" />
        </div>
        <div className="Add">
          <label>Address</label>
          <textarea></textarea>
          <br />
        </div>
        <div className="Mot">
          <label>Mother Tongue</label>
          <select>
            <option value="MT">Select Mother tongue...</option>
            <option value="tamil">Tamil</option>
            <option value="english">english</option>
            <option value="telugu">telugu</option>
            <option value="marathi">marathi</option>
            <option value="malayalam">malayalam</option>
            <option value="hindi">hindi</option>
            <option value="kannadam">kannadam</option>
          </select>
        </div>
        <div className="religion">
          <label>Religion</label>
          <select>
            <option value="Religion">Select Religion...</option>
            <option value="hindu">Hindu</option>
            <option value="muslim">Muslim</option>
            <option value="christian">Christian</option>
            <option value="Sikhism">Sikhism</option>
          </select>
        </div>
      </div>
    </>
  );
}
export default Info;
