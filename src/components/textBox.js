import React, { Component } from 'react';
//import { CONTRACT_ADDR } from '../constant';
import '../Stylesheets/textBox.css';
import { requestAccount } from '../utils/common';

const TextBox = () => {

const connect = async ()=>{
    await requestAccount()
}





 return( <div className="text-box">
      <label>Enter your message: </label><input type="text" id='input'/>
      <button className="btn" onClick={connect}>Submit</button>
    </div>)
};

export default TextBox;