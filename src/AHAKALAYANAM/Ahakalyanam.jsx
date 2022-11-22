import React,{ useState } from "react";
import "./Ahakalyanam.css";

export default function Ahakalyanam() {
     
    const [Name, setName] = useState("");
    const [Errorname,setErrorname] = useState("");
    const [Email, setEmail] = useState("");
    const [ErrorEmail, setErrorEmail] = useState("");
    const [MobileNo, setMobileNo] = useState("");
    const [ErrorMobileno, setErrorMobileNo] = useState("");
    const [Password, setPassword] = useState("");
    const [ErrorPassword, setErrorPassword] = useState("");


    const handleSubmit = (event) => {
      event.preventDefault();

     if(Name===""&& Name<5){
      setErrorname("Enter your Fullname");

     }else{
      setErrorname("");
     }

     if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(Email)){
      setErrorEmail("please enter the correct mail");

     }else{
      setErrorEmail("");
     }
     if(MobileNo.length<10){
      setErrorMobileNo("Enter the Correct Mobileno");
     }else{
      setErrorEmail("");
     }

     if(Password.length<4){
      setErrorPassword("Password not Strong");
     }else{
      setErrorPassword("");
     }
    
    }

     

  return (
       
    
    <div>
     
        <div className="header">
          <h1>AAHAA <br /> <span> KALYANAM </span></h1>
          </div>
        
          <div className="rittoh1">
          <p>Aahakalyanam Event Managemnt Private Limited</p> 
          <button id="sigin">SignIn</button>

        </div>
        <div className="undrline1"></div>
        <div className="undrline"></div>

        <div className="bkcolr">
        <div className="nxttoh1">
          <h2>Ahaa - Kalyanam - Marriages - Online</h2>
        </div>
        
        
        
       
        <div className="headone">
            <h2 className="blwhdr">Match your Pair From Lakhs</h2>

            <div className="reg">
            <h2> REGISTER FREE</h2>
            </div>
        </div>
        
        <div className="overall">
        <div className="bgimg">
          <img src="whands.jpg" alt="image" />
        </div>
         <div className="formx"> 
        <form onSubmit={handleSubmit} >

        <input type="text" placeholder="Enter your Name" onChange={(e)=> setName(e.target . value)}/> <br />
        <small>{Errorname}</small>
        <br />
        <div className="gender">
            <label>Gender</label>
          
            <label for="male">Male</label>
            <input type="radio" name="gender" value="male" id="male"/>
            <label for="female">Female</label>
            <input type="radio" name="gender" value="female" id="female"/>
          
            
         </div> <br />
        <label>Profile Created For</label>
        <select name="-Select-" id="whom">
          <option value=""></option>
          <option value="Myself">MySelf</option>
          <option value="Son">Son</option>
          <option value="Daughter">Daughter</option>
          <option value="Sister">Sister</option>
          <option value="Relative">Relative</option>
          <option value="Friends">Friends</option>
        </select>
        <br />
        <label>MotherTounge</label>
        <select name="MotherTongue" id="mtng">
          <option value=""></option>
          <option value="Tamil">Tamil</option>
          <option value="Telugu">Telugu</option>
          <option value="Kanada">Kanada</option>
          <option value="Malyalam">Malayalam</option>
          <option value="Marathi">Marathi</option>
        </select>
        <br />
        <label>Religion</label>
        <select name="Religion" id="rlgn">
          <option value=""></option>
          <option value="Hindhu">Hindhu</option>
          <option value="Christian">Christain</option>
          <option value="Muslim">Muslim</option>
          <option value="Jainism">Jainism</option>
          <option value="buddhism">Buddhim</option>
        </select>
        <br />
        {/* <select name="Caste" id="cste">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
        </select> */}
        <input type="text" placeholder="Enter Mobile Number" onChange={(e)=> setMobileNo(e.target.value)} /> <br />
        <small>{ErrorMobileno}</small> <br />
        <input type="text" placeholder="Enter Email-id" onChange={(e)=>setEmail(e.target.value)}/> <br />
        <small>{ErrorEmail}</small> <br />
        <input type="text" placeholder="Create Password" onChange={(e) => setPassword(e.target.value)} />  <br />
        <small>{ErrorPassword}</small><br />
        <div className="chekbox">
        <input type="checkbox" id="cndn" />
        <label htmlFor="cndn">I Accept The Terms and condition</label><br />
        </div>

        
          <center>
        <button type="submit" id="sub"> SUBMIT </button>
         </center>
        
        
        
        </form>
        </div>
        </div>
      
      
          
        
      <div className="btm">
        <p>REGISTER HERE FREE AND CHOOSE YOUR PARTNER FROM LAKHS  </p>
        </div>
        
  <div className="down"></div> 
  </div>
    </div> 
    
  );
}
