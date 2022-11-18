import React from 'react'
import "./DashBoard.scss";
import defaultPhoto from './defaultPhoto.png'
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';
import MailIcon from '@mui/icons-material/Mail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SendIcon from '@mui/icons-material/Send';
import Popup from 'reactjs-popup';

const DashBoard = () => {
    return (
        <div className='dashboard'>
            <div className='card'>
                <div className='top'>
                    <p>Welcome! tamil. Find. Meet .Connect. Interact. Kalyan is where you are likely to find a Life Partner who is really right for you.
                    </p>
                </div>
                <hr />
                <div className='mid'>
                    <div className='left'>
                        <div className='box'>
                            <button>Matches</button>
                            <span>0</span>
                        </div>
                        <div className='box'>
                            <button>Inbox</button>
                            <span>0</span>
                        </div>
                        <div className='box'>
                            <button>Request</button>
                            <span>0</span>
                        </div>
                        <div className='box'>
                            <button>Selected</button>
                            <span>0</span>
                        </div>
                        <div className='box'>
                            <button>Rejected</button>
                            <span>0</span>
                        </div>
                    </div>
                    <div className='profiles'>
                        <div className='right'>
                            <div className='profile'>
                                <div className='first'>
                                    <img src={defaultPhoto} alt="defaultphoto" width="150px" />
                                    <p>Request Photo</p>
                                </div>
                                <div className='second'>
                                    <div>
                                        <p><button id='name'>Naveen</button> | HAHAF00001</p>
                                        <p>22 yrs | 5ft|Hindu, Tamil|Gounder|Tamil Nadu, India</p>
                                        <p>B.Sc.   |   Officer</p>
                                    </div>
                                    <><p>Last Online: 12 Nov 2022</p></>
                                    <div className='buttons'>
                                        <button><DoneIcon /> Select</button>
                                        <button><CancelIcon /> Reject</button>
                                        {/* <button><MailIcon /> Send Message</button> */}
                                        <Popup trigger={<button><MailIcon /> Send Message</button>}
                                            position="right center">
                                            <div id='popup'>
                                                <form>
                                                    <textarea placeholder='message' />
                                                    <button><SendIcon /></button>
                                                </form>
                                            </div>
                                        </Popup>
                                        <button><PhoneAndroidIcon /> View phone number</button>
                                        <button><LocalPhoneIcon /> Parents Number</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='right'>
                            <div className='profile'>
                                <div className='first'>
                                    <img src={defaultPhoto} alt="defaultphoto" width="150px" />
                                    <p>Request Photo</p>
                                </div>
                                <div className='second'>
                                    <div>
                                        <p><button id='name'>Naveen</button> | HAHAF00001</p>
                                        <p>22 yrs | 5ft|Hindu, Tamil|Gounder|Tamil Nadu, India</p>
                                        <p>B.Sc.   |   Officer</p>
                                    </div>
                                    <><p>Last Online: 12 Nov 2022</p></>
                                    <div className='buttons'>
                                        <button><DoneIcon /> Select</button>
                                        <button><CancelIcon /> Reject</button>
                                        {/* <button><MailIcon /> Send Message</button> */}
                                        <Popup trigger={<button><MailIcon /> Send Message</button>}
                                            position="right center">
                                            <div id='popup'>
                                                <form>
                                                    <textarea placeholder='message' />
                                                    <button><SendIcon /></button>
                                                </form>
                                            </div>
                                        </Popup>
                                        <button><PhoneAndroidIcon /> View phone number</button>
                                        <button><LocalPhoneIcon /> Parents Number</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='right'>
                            <div className='profile'>
                                <div className='first'>
                                    <img src={defaultPhoto} alt="defaultphoto" width="150px" />
                                    <p>Request Photo</p>
                                </div>
                                <div className='second'>
                                    <div>
                                        <p><button id='name'>Naveen</button> | HAHAF00001</p>
                                        <p>22 yrs | 5ft|Hindu, Tamil|Gounder|Tamil Nadu, India</p>
                                        <p>B.Sc.   |   Officer</p>
                                    </div>
                                    <><p>Last Online: 12 Nov 2022</p></>
                                    <div className='buttons'>
                                        <button><DoneIcon /> Select</button>
                                        <button><CancelIcon /> Reject</button>
                                        {/* <button><MailIcon /> Send Message</button> */}
                                        <Popup trigger={<button><MailIcon /> Send Message</button>}
                                            position="right center">
                                            <div id='popup'>
                                                <form>
                                                    <textarea placeholder='message' />
                                                    <button><SendIcon /></button>
                                                </form>
                                            </div>
                                        </Popup>
                                        <button><PhoneAndroidIcon /> View phone number</button>
                                        <button><LocalPhoneIcon /> Parents Number</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='right'>
                            <div className='profile'>
                                <div className='first'>
                                    <img src={defaultPhoto} alt="defaultphoto" width="150px" />
                                    <p>Request Photo</p>
                                </div>
                                <div className='second'>
                                    <div>
                                        <p><button id='name'>Naveen</button> | HAHAF00001</p>
                                        <p>22 yrs | 5ft|Hindu, Tamil|Gounder|Tamil Nadu, India</p>
                                        <p>B.Sc.   |   Officer</p>
                                    </div>
                                    <><p>Last Online: 12 Nov 2022</p></>
                                    <div className='buttons'>
                                        <button><DoneIcon /> Select</button>
                                        <button><CancelIcon /> Reject</button>
                                        {/* <button><MailIcon /> Send Message</button> */}
                                        <Popup trigger={<button><MailIcon /> Send Message</button>}
                                            position="right center">
                                            <div id='popup'>
                                                <form>
                                                    <textarea placeholder='message' />
                                                    <button><SendIcon /></button>
                                                </form>
                                            </div>
                                        </Popup>
                                        <button><PhoneAndroidIcon /> View phone number</button>
                                        <button><LocalPhoneIcon /> Parents Number</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DashBoard