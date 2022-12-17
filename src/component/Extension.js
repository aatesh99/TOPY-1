// import React from "react"
import "./extension.css"
import {useHistory} from 'react-router-dom';
import { useState } from "react";
import Modal from "./Modal";



import React from "react";
import "rsuite/dist/rsuite.min.css";
import { Popover, Whisper, Dropdown, 
    Button } from "rsuite/";
  
    const renderMenu = ({ left, top, className }, ref) => {
      const [show, setShow] = useState(false);

      
      
        return (
            <Popover ref={ref} 
                className={className} 
                style={{ left, top }} full>
                <Dropdown.Menu title="Extension Meeting">
                    <Dropdown.Item eventKey={1} onClick={() => setShow(true)}>
                        30 Minute
                    </Dropdown.Item>
                    <Dropdown.Item eventKey={2} onClick={() => setShow(true)}>
                        60 Minute
                    </Dropdown.Item>
                    <Dropdown.Item eventKey={3} onClick={() => setShow(true)}>
                        120 Minute
                    </Dropdown.Item>
                </Dropdown.Menu>
                <Modal title="Extension Granted" onClose={() => setShow(false)} show={show}>
        <p>Extension Request Accepted</p>
      </Modal>
      
            </Popover>
        );
    };
  
export default function Extension() {
  let history = useHistory();
  
    return (
        
        <center>
          <h2 className="A11"> Welcome Arya to TOPY Station</h2>
            <div class="DivDD" style={{ padding: 20 }}>
                
                <Whisper placement="bottomStart" 
                    trigger="click" speaker={renderMenu}>
                    <Button className="DDBtn" appearance="primary" color="blue" >
                        Extension Request
                    </Button>
                </Whisper>

                <Button className="DDBtn" appearance="primary" color="red" onClick={() => {history.push('/Notification')}}>End Meeting</Button>
                <img src={require('./oldie.jpg')} width="500px" height="450px"></img>
            </div>
           
    
        </center>
    );
}
