import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Help.scss'
import { useState } from 'react';
import useForm from './useForm';
import { color } from '@mui/system';

const Help = () => {
  const { handleSubmit, handleChange, values, errors } = useForm()

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);
  const [open8, setOpen8] = React.useState(false);
  const [open9, setOpen9] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };
  const handleClick4 = () => {
    setOpen4(!open4);
  };
  const handleClick5 = () => {
    setOpen5(!open5);
  };
  const handleClick6 = () => {
    setOpen6(!open6);
  };
  const handleClick7 = () => {
    setOpen7(!open7);
  };
  const handleClick8 = () => {
    setOpen8(!open8);
  };
  const handleClick9 = () => {
    setOpen9(!open9);
  };
  return (
    <div className='help'>
      <div className='top'>
        <h3>Help</h3>
      </div>
      <hr />
      <div className='mid'>
        <h4>Have a question / complaint / feedback for us? We are here to help you.</h4>
        <div className='items'>
          <div className='box1'>
            <h5>FAQ</h5>
            <List style={{ width: 400 }}>
              {/* 1 */}
              <ListItem button onClick={handleClick}>
                <ListItemText primary="How to sigin?" />
                {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <div>
                  <ul>
                    <li>Visit www.Ahaakalyanammatrimony.com</li>
                    <li>Enter the Registered e-mail ID and Password</li>
                    <li>Click on the "SIGN IN" option on the homepage</li>
                  </ul>
                </div>
              </Collapse>

              {/* 2 */}
              <ListItem button onClick={handleClick1}>
                <ListItemText primary="Forgot Password" />
                {open1 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItem>
              <Collapse in={open1} timeout="auto" unmountOnExit>
                <div>
                  <ul>
                    <li>Please select the "Forgot Password?" option and enter the registered e-mail ID</li>
                    <li>A link to reset the password will be sent to your registered e-mail ID</li>
                    <li>Click on the link and enter the new password</li>
                    <li> Now you can use the new password to login to your profile</li>
                  </ul>
                </div>
              </Collapse>

              {/* 3 */}
              <ListItem button onClick={handleClick2}>
                <ListItemText primary="How to Edit Profile?" />
                {open2 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItem>
              <Collapse in={open2} timeout="auto" unmountOnExit>
                <div>
                  <ul>
                    <li>Login to your profile with your registered e-mail ID and Password</li>
                    <li>After you login to your profile, please select the "Manage" option from the top navigation menu</li>
                    <li>Select "My Profile" in the Manage section</li>
                    <li>Click on the pen symbol that appears next to the section you wish to modify</li>
                    <li>Make the necessary changes and click on the "Save" option</li>
                    <li>Modified content will be displayed on your profile after approval</li>
                  </ul>
                </div>
              </Collapse>

              {/* 4 */}
              <ListItem button onClick={handleClick3}>
                <ListItemText primary="How to Search Profile?" />
                {open3 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItem>
              <Collapse in={open3} timeout="auto" unmountOnExit>
                <div>
                  <ul>
                    <li>Login to your profile with your registered e-mail ID and Password</li>
                    <li>After logging-in please select the "Search" option from the top navigation menu</li>
                    <li>Your partner preference criteria will be prefilled by default</li>
                    <li>Make the necessary changes if required and click on the "Search" button</li>
                    <li>Profiles that match the search criteria will be displayed</li>
                    <li>If you wish to filter the profiles further, you can choose the necessary filter options from the left navigation menu</li>
                  </ul>
                </div>
              </Collapse>

              {/* 5 */}
              <ListItem button onClick={handleClick4}>
                <ListItemText primary="How to Send Messages?" />
                {open4 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItem>
              <Collapse in={open4} timeout="auto" unmountOnExit>
                <div>
                  <h6>Free member:</h6>
                  <ul>
                    <li>Login to your profile with your registered e-mail ID and Password from the login screen</li>
                    <li>Once you login to your profile, please select the profile you wish to contact from the Search results or from the Dashboard</li>
                    <li>Click the "Send Message" option and select the message you wish to send</li>
                    <li>You will be notified once the member replies to your message</li>
                  </ul>
                  <h6>Paid member:</h6>
                  <ul>
                    <li>Login to your profile with your registered e-mail ID and Password</li>
                    <li>After you login to your profile, please select the member you wish to contact from the Search results or from the Dashboard</li>
                    <li>Click the "Send Message" option and select the message you wish to send or type your own message and send it to the selected member</li>
                    <li>For a quick response we suggest you share your contact details in the message</li>
                    <li>You will be notified once the member replies to your message</li>
                  </ul>
                </div>
              </Collapse>

              {/* 6 */}
              <ListItem button onClick={handleClick5}>
                <ListItemText primary="How to Reply to messages?" />
                {open5 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItem>
              <Collapse in={open5} timeout="auto" unmountOnExit>
                <div>
                  <ul>
                    <li>Login to your profile with your registered e-mail ID and Password</li>
                    <li>Once you login to your profile, please select the "Inbox" option from the left navigation menu</li>
                    <li>Unread messages will be displayed; if you wish to reply to a message that has already been read, change the status from "Unread" to "Read" to display the message</li>
                    <li>Select the message and click the "Reply" button</li>
                  </ul>
                </div>
              </Collapse>

              {/* 7 */}
              <ListItem button onClick={handleClick6}>
                <ListItemText primary="How to add Photo?" />
                {open6 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItem>
              <Collapse in={open6} timeout="auto" unmountOnExit>
                <div>
                  <ul>
                    <li>Login to your profile with your registered e-mail ID and Password</li>
                    <li>Once you login to your profile, please select the "Manage" option from the top navigation menu</li>
                    <li>Select "My Profile" in the Manage section and choose the option "Photos"</li>
                    <li>Select the photo you wish to display and upload it to your profile</li>
                    <li>Please add images that are less than 10MB</li>
                  </ul>
                </div>
              </Collapse>

              {/* 8 */}
              <ListItem button onClick={handleClick7}>
                <ListItemText primary="How to add Horoscope?" />
                {open7 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItem>
              <Collapse in={open7} timeout="auto" unmountOnExit>
                <div>
                  <ul>
                    <li>Login to your profile with your registered e-mail ID and Password</li>
                    <li>Once you login to your profile, please select the "Manage" option from the top navigation menu</li>
                    <li>Select "My Profile" in the Manage section and choose the option "Horoscope"</li>
                    <li>Enter the Date of Birth, Place of Birth and Time of birth to generate a system generated horoscope</li>
                    <li>If you do not wish to generate a horoscope, click on "Upload Horoscope" to add a scanned image</li>
                    <li>Please add an image that is less than 10MB</li>
                  </ul>
                </div>
              </Collapse>

              {/* 9 */}
              <ListItem button onClick={handleClick8}>
                <ListItemText primary="How to add Trust document?" />
                {open8 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItem>
              <Collapse in={open8} timeout="auto" unmountOnExit>
                <div>
                  <ul>
                    <li>Login to your profile with your registered e-mail ID and Password</li>
                    <li>Once you login to your profile, please select the "Manage" option from the top navigation menu</li>
                    <li>Select "My Profile" in the Manage section and choose the option "Trust Mark"</li>
                    <li>You can add ID Proof, Education Proof and Income proof by selecting the respective icons</li>
                    <li>Please add an image that is less than 10MB</li>
                    <li>Following are the list of accepted documents
                      <ol>
                        <li>Any Government-issued ID cards for ID proof</li>
                        <li>Copy of your latest education certificate for Education proof</li>
                        <li>Copy of your latest employment certificate or pay slip for Occupation proof</li>
                      </ol>
                    </li>
                  </ul>
                </div>
              </Collapse>

              {/* 10 */}
              <ListItem button onClick={handleClick9}>
                <ListItemText primary="What are the Packages available?" />
                {open9 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItem>
              <Collapse in={open9} timeout="auto" unmountOnExit>
                <div>
                  <p>We have three different types of packages ranging from Rs.4890 to Rs.8490. We also offer the top-up option to access additional phone numbers or to avail our Astro matching facility.</p>
                  <h5>Membership Packages:</h5>
                  <ul>
                    <li>50 days validity - Rs.4890 (unlimited messages along with 25 phone numbers)</li>
                    <li>100 days validity - Rs.5490 ( unlimited messages along with 100 phone numbers)</li>
                    <li>200 days validity - Rs.8490 (unlimited messages along with 150 phone numbers)</li>
                  </ul>
                  <h6>Top-up Packages:</h6>
                  <ul>
                    <li>Additional 25 phone numbers - Rs.750</li>
                    <li>Astro Match Reports (25 matched profile) - Rs.500</li>
                  </ul>
                  <p>Click here to make a payment and upgrade your profile to paid services.</p>
                </div>
              </Collapse>
            </List>
          </div>
          <div className='box2'>
            <h5>Post your query</h5>
            <span>{errors.mandatory}</span>
            <form onSubmit={handleSubmit}>
              <table>
                <tbody>
                  <tr>
                    <td>Name  <span>*</span></td>
                    <td><input type="test" name='userName' value={values.userName} onChange={handleChange} /><br /><span>{errors.userName}</span></td>
                  </tr>
                  <tr>
                    <td>e-mail ID	<span>*</span></td>
                    <td><input type="email" name='email' value={values.email} onChange={handleChange} /><br /><span>{errors.email}</span></td>
                  </tr>
                  <tr>
                    <td>Phone Number	<span>*</span></td>
                    <td><input type="number" name='phoneNumber' value={values.phoneNumber} onChange={handleChange} /><br /><span>{errors.phoneNumber}</span></td>
                  </tr>
                  <tr>
                    <td>Type	<span>*</span></td>
                    <td>
                      <select name="option" onChange={handleChange}>
                        <option >Select</option>
                        <option value="query">Query</option>
                        <option value="request">Request</option>
                        <option value="complaint">Complaint</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Subject	<span>*</span></td>
                    <td><input type="test" name='subject' value={values.subject} onChange={handleChange} /><br /><span>{errors.subject}</span></td>
                  </tr>
                  <tr>
                    <td>Question	<span>*</span></td>
                    <td><textarea name='question' value={values.question} onChange={handleChange}></textarea><br /><span>{errors.question}</span></td>
                  </tr>
                </tbody>
              </table>
              <button type='submit'>Submit</button>
            </form>
          </div>
          <div className='box3'>
            <div className='b1'>
              <h5>Call us</h5>
              <div style={{}}>
                <p>You can call our help line at:</p>
                <b>044 4014 6969</b>
                <p>We are available on all working days
                  between 10 AM To 6PM (IST)</p>
              </div>
            </div>
            <div className='b2'>
              <h5>Write to us</h5>
              <div>
                <p>Please write to us at</p>
                <span>help@ahaakalyanammatrimony.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help