import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'
import { useNavigate } from 'react-router-dom';
import Footer from '../common/Footer';

function UserLogin(){

  document.title = 'User Login';

  const [username, setUesrname] = useState();
  const [password, setPassword] = useState();
  const [captchaVal, setCaptchaVal] = useState('');
  const [captchaText, setCaptchaText] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [[popupMessage, type], setPopupMessage] = useState([]);
  const navigate = useNavigate();

  const pop = (msg, type) =>{

    setShowPopup(true);
    setPopupMessage([msg,type])

    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  }

  const generateCaptchaText = () => {
    let possibleCharacters = '0123456789';
    let captchaText = '';
    for (let i = 0; i < 4; i++) {
      captchaText += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    }
    setCaptchaText(captchaText);
  };
  useEffect(() => {
    generateCaptchaText();
  }, []);

  function togglePassword(){
    const password = document.getElementById('password');
    const checkbox = document.getElementById('showpw');
    if(checkbox.checked) password.type = 'text';
    else password.type = 'password';
  }

  function handleSubmit(e){
    e.preventDefault();
    if(username && password){
      if(captchaText === captchaVal){
        axios.post('http://localhost:5555/login/user',{username, password}).
        then(result =>{
          localStorage.setItem('current_user', JSON.stringify(result.data.user));
          if(result.data.login_status){
            pop("Loggin in", "success")
            navigate(`/user/${result.data.user.username}`)
          }
        }).
        catch(err=>{
          pop(err.response?.data?.message, "warning");
        })
      }
      else pop("Invalid captcha", "warning");
      generateCaptchaText();
    }
    else pop("Please fill all fields", "warning");
  }

  return (
      <div id="login" className="container fxc text-body">
        <div className="subcontainer fxc">
          <div className="bg"></div>
          <form className='formbox fxc' onSubmit={handleSubmit}>
            <h3 className="title-font">User Login</h3>
            <div className="inputbox fxc">
              <label htmlFor="username">Username</label>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
              <input type="text" id='username' onChange={(e)=>setUesrname(e.target.value)} />
            </div>
            <div className="inputbox fxc">
              <label htmlFor="password">Password</label>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"/></svg>
              <input type="password" id='password'  onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div className="checkbox fxr">
              <input type="checkbox" id="showpw" onChange={togglePassword} />
              <label htmlFor='showpw'>Show password</label>
            </div>
            <div className="captchabox fxc">
              <label htmlFor="captchainput">Verify</label>
              <input type="text" id='captchaval' disabled value={captchaText} />
              <input type="text" id='captchainput'  onChange={(e)=>setCaptchaVal(e.target.value)} />
            </div>

            <button id='loginbtn' className='button-primary'>Login</button>
          </form>
          {showPopup && (<span id='popup' style={{opacity:1}} className={type}>{popupMessage}</span>)}
        </div>

        <Footer/>

      </div>
  )
}

export default UserLogin;