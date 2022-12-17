import React from "react"
import "./home.css"
import {useHistory} from 'react-router-dom';
//import { createBrowserHistory } from 'history'


const Home = () => {

  function setup(e) {
    alert('You clicked setup.');
  }
  
  
  // const routeChange = () =>{ 
  //   let path = '/MeetReq'; 
  //   let history = useHistory();
  //   history.push(path);
  // }

    //const history = createBrowserHistory();
   // const routeChange = () => history.push('/meetReq');

   let history = useHistory();

  

  return (
    
    <>
      <section className='hero'>
        <div>

          <h2>Welcome Arya to TOPY Station</h2>
        <div class="mainDiv">
          <button class="b1" onClick={() => {history.push('/Signup')}}>Setup Meeting</button>
          <button class="b2" onClick={() => {history.push('/meetReq')}}>Recommendations</button>
          <div>
          <img src={require('./old.jpg')}></img>
          </div>
        </div>
        </div>
        
        
      </section>
    </>
  )
}
export default Home
