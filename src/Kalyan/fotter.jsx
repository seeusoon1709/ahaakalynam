import React from "react";
import './Fotter.css';
import ShopIcon from '@mui/icons-material/Shop';
import StoreIcon from '@mui/icons-material/Store';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Fotter=()=>{
    return(
        <div>
        <div className="fotterclass"></div>
        <div className="fotterclass1"></div>
        <footer className="fotter">
          <p>Copyright © 2021</p>
          <ul>
            <li><button><ShopIcon/></button></li>
            <li><button><StoreIcon/></button></li>
            <li><button><FacebookIcon/></button></li>
            <li><button><TwitterIcon/></button></li>
          </ul>
        </footer>
        </div>
    );
}
export default Fotter;