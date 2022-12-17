import React from "react"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./meeting.css"
import {useHistory} from 'react-router-dom';
import { useState } from "react";
import Modal from "./Modal";
import { getOffsetParent } from "rsuite/esm/DOMHelper";



const MeetReq = () => {
  function delayAndGo(e, path) {
    e.preventDefault();
    setShow(true);

    // Do something..

    setTimeout(() => history.push(path), 5000);
  }

  const [show, setShow] = useState(false);

  let history = useHistory();
  function hide1(){
    document.getElementById("c1").style.display = "none"
  }
  function hide2(){
    document.getElementById("c2").style.display = "none";
    
  }
  function hide3(){
    document.getElementById("c3").style.display = "none"
    
  }
  
  return (
    
    <> 
    <div className="cardClass">
      <Card id="c1" classname = "c1">      
      <Card.Img variant="top" src={require("./read1.jpg")}/>   
      <Card.Body>
        <Card.Title><h2>Recommendation </h2></Card.Title>
        <Card.Text>
          Topy Management
        </Card.Text>
      </Card.Body>
      
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Name: Aatesh Arya</ListGroup.Item>
        <ListGroup.Item>About Me: Dummy data</ListGroup.Item>
        <ListGroup.Item>Time: 02:00 - 03:00 PM</ListGroup.Item>
        <ListGroup.Item>Activity Preference: Reading</ListGroup.Item>        
      </ListGroup>
      <Card.Body>
        <Card.Link href="./Notification" className="cardAccept" onClick={(e) => delayAndGo(e, "/")} >Accept </Card.Link>
        <Card.Link href="#" onClick={hide1} className="cardReject">Reject</Card.Link>
      </Card.Body>
      
    </Card>
   
   
    <Card id="c2" classname = "c2" style={{  }}>      
      <Card.Img variant="top" src={require("./outdoor.jpg")}/>     
      <Card.Body>
        <Card.Title><h2>Recommendation</h2></Card.Title>
        <Card.Text>
          Topy Management
        </Card.Text>
      </Card.Body>
      
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Name: Aatesh Arya</ListGroup.Item>
        <ListGroup.Item>About Me: Dummy data</ListGroup.Item>
        <ListGroup.Item>Time: 02:00 - 03:00 PM</ListGroup.Item>
        <ListGroup.Item>Activity Preference: Outdoor Activity</ListGroup.Item>        
      </ListGroup>
      <Card.Body>
        <Card.Link href="./Notification" className="cardAccept" onClick={(e) => delayAndGo(e, "/")} >Accept</Card.Link>
        <Card.Link href="#" onClick={hide2} className="cardReject">Reject</Card.Link>
      </Card.Body>   
    </Card>



      <Card id="c3" classname ="c3" style={{ width: '18rem' }}>      
      <Card.Img variant="top" src={require("./singing.jpg")}/>   
      <Card.Body>
        <Card.Title><h2>Recommendation</h2></Card.Title>
        <Card.Text>
          Topy Management
        </Card.Text>
      </Card.Body>
      
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Name: Aatesh Arya</ListGroup.Item>
        <ListGroup.Item>About Me: Dummy data</ListGroup.Item>
        <ListGroup.Item>Time: 02:00 - 03:00 PM</ListGroup.Item>
        <ListGroup.Item>Activity Preference: Music</ListGroup.Item>        
      </ListGroup>
      <Card.Body>
        <Card.Link href="#" className="cardAccept" onClick={(e) => delayAndGo(e, "/")} >Accept</Card.Link>
        <Card.Link href="#" onClick={hide3}  className="cardReject">Reject</Card.Link>
      </Card.Body>     
    </Card>

    <Modal title="Meeting request granted " style = {{backgroundColor:"green"}} onClose={() => setShow(false)} show={show}>
        <p>Meeting setup at 02:00 - 03:00</p>
      </Modal>
    </div>      
      
    

    </>
  )
}
export default MeetReq