import React, { useState } from "react";
import "./Home.css";
import ShopIcon from "@mui/icons-material/Shop";
import StoreIcon from "@mui/icons-material/Store";
import SpaIcon from "@mui/icons-material/Spa";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import ShieldMoonIcon from "@mui/icons-material/ShieldMoon";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Fotter from "./fotter.jsx";

function Home() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <div className="all">
      <div className="navbar">
        <div className="navlogo">
          <div className="logo"> </div>
          <div class="logohead">
            <h2>
              Ahaa <br /><small>Kalayanam</small>
            </h2>
          </div>
        </div>
        <div className="inputlabel">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={inputs.username || ""}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Password"
              name="age"
              value={inputs.age || ""}
              onChange={handleChange}
            />
            <button type="button" id="btn">
              SIGN IN
            </button>
            <button type="button" id="btn">
              REGISTER
            </button>
          </form>
          <div className="checkbox">
        <input type="checkbox" id="menu" />
        <label htmlFor="menu">Rembember me</label>
        <input type="checkbox" id="menu1" />
        <label htmlFor="menu1">Forgot Password ?</label>
      </div>
        </div>
        <div className="icon">
          <h4>Download our App</h4>
          <div className="ic1">
            <button>
              <ShopIcon />
            </button>
            <button>
              <StoreIcon />
            </button>
          </div>
        </div>
      </div>
     

      <div className="box"></div>
      <div className="image">
        <h1>
          {" "}
          Come find the one you want to <br /> spend the rest of your life with{" "}
        </h1>
      </div>
      <div className="text">
        <h1>Find Lakhs of Indian Brides & Grooms in Kalyan Matrimony</h1>
        <p>
          Our name, backed by the trusted mega brand Kalyan Jewellers, carries
          with it our defining history and rich legacy of success and good
          fortune. Come over to make an auspicious and blessed new beginning to
          your life partner search with kalyanmatrimony.com.
        </p>
        <p>
          At Kalyan Matrimony you will find lakhs of profiles carefully sourced
          from across the globe and with rich information.
        </p>
        <p>
          Go ahead ! Click the register button and start searching. Our trust -
          proofed and most intuitive register - verify - validate - match and
          connect approach is just what you need to find your life partner.
        </p>
        <p>
          Register free now, complete your profile information, do not forget to
          upload your photo and horoscope, search and contact the most
          compatible Brides or Grooms.
        </p>
      </div>

      <div className="text1">
        <h1>Why Kalyan Matrimony</h1>
        <div className="text-icon">
          <div className="texticon1">
            <ul>
              <li><SpaIcon /></li>
              <li><EnergySavingsLeafIcon /></li>
              <li><DataSaverOffIcon /></li>
            </ul>
          </div>
          <div className="texticon2">
            <ul>
              <li> <h3>From the Trusted Brand Kalyan Jewellers</h3></li>
              <li><h3>Profile details are Secure and Confidential</h3></li>
              <li> <h3>Most Intuitive, User Friendly Technology</h3></li>
            </ul>
          </div>
          <div className="texticon3">
            <ul>
              <li><NewspaperIcon /></li>
              <li><ShieldMoonIcon /></li>
              <li><LockOpenIcon /></li>
            </ul>
          </div>
          <div className="texticon4">
            <ul>
              <li><h3>Lakhs of Brides & Grooms Profiles</h3></li>
              <li><h3>Phone number Verified Profiles</h3></li>
              <li><h3>Intelligent Matchmaking</h3></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text2">
        <h1>You Deserve A Kalyan Matrimony Experience</h1>
        <div className="paragraph1">
          <div className="paragraph2">
            <h6>
              It is not how many you meet but who you meet. <br />
              And we believe in giving you the best start.
            </h6>
            <button type="button" id="btn1">
              REGISTER
            </button>
          </div>
          <div className="paragraph3">
            <ul>
              <li><FavoriteIcon /></li>
              <li><FavoriteIcon /></li>
              <li><FavoriteIcon /></li>
              <li><FavoriteIcon /></li>
              <li><FavoriteIcon /></li>
              <li><FavoriteIcon /></li>
            </ul>
          </div>
          <div className="paragraph4">
            <ul>
              <li><p>Fits your busy lifestyle</p></li>
              <li><p>Match reviews across multiple criteria</p></li>
              <li><p>Phone-verified matches</p></li>
              <li><p>Intelligent matchmaking</p></li>
              <li><p>All interactions are private, secure and confidential</p></li>
              <li><p>An experienced team backed by technology works with you</p></li>
            </ul>
          </div>
        </div>
      </div>

    
    <div className="bottom">
      <div className="botton1">
        <ul>
          <li><h3>Need Help?</h3></li>
          <li><p>Help</p></li>
        </ul>
      </div>
      <div className="bottom2">
        <ul>
          <li><h3>Company</h3></li>
          <li><p>About Us</p></li>
        </ul>
      </div>
      <div className="bottom3">
        <ul>
          <li><h3>Privacy & You</h3></li>
          <li><p>Team of use</p></li>
          <li><p>Privacy policy</p></li>
        </ul>
      </div>
    </div>
    
      <Fotter />
    </div>
  );
}
export default Home;
