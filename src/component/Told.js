import React from "react"
import {useState} from 'react';
import "./signup.css"
import {useHistory} from 'react-router-dom';
import "./told.css"

import Modal from "./Modal";



const Signup = () => {
  let history = useHistory();
  const [isActive, setIsActive] = useState(false);
  function delayAndGo(e, path) {
    e.preventDefault();
    setShow(true);

    // Do something..

    setTimeout(() => history.push(path), 4500);
  }

  const [show, setShow] = useState(false);

  
  const handleClick = () => {
    setIsActive(current => !current);
  }
  
  


  return (
    <>
   
    
    <div className="tablees">
    <h2>Find Senior Citizen to Send Request</h2>

      <table>
        <tr>
          <th>Name</th>
          <th>Time</th>
          <th>Date</th>
          <th>Activity Preference</th>
        </tr>
        <tr style={{
          backgroundColor: isActive ? 'salmon' : '',
          color: isActive ? 'white' : '',
        }}
        onClick={handleClick}>
          <td>Anom</td>
          <td>02:00 PM</td>
          <td>12/12/2022</td>
          <td>Reading</td>
        </tr>
        <tr>
          <td>Megha</td>
          <td>02:00 PM</td>
          <td>12/12/2022</td>
          <td>Reading</td>
        </tr>
        <tr>
          <td>Subham</td>
          <td>02:00 PM</td>
          <td>12/12/2022</td>
          <td>Reading</td>
        </tr>
      </table>
      <button className="B121" onClick={(e) => delayAndGo(e, "/")}>Send Request</button>
      <Modal title="Request Sent " onClose={() => setShow(false)} show={show}>
        <p>Request to setup meeting sent wait for action</p>
      </Modal>
    </div>  
        
    </>
  )
}
export default Signup
