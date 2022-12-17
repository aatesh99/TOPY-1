import React from "react"
import "./notification.css"
import Favicon from 'react-favicon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import {useHistory} from 'react-router-dom';

const Notification = () => {

  let history = useHistory();



  function showSky() {
    // document.getElementById('showSky').style.backgroundColor = "blue";
  
    document.getElementById('showSky').style.display = "block";

    // console.log("hi")
 }
 

  return (  
    
   
    <>
    <section>
     
     
  <div class="container mt-5">
    <div class="row">


      <div class="green mainBar col-sm-12 alert fade alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show">
        <div class="" id="outer">
      {/* <FontAwesomeIcon icon={solid('window-close')} /> */}

          <div class="inner"><strong class="inner font__weight-semibold">Well done!</strong> Meeting Successfully Started</div>
        </div>
      </div>

      <div class="mainBar col-sm-12 alert fade alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show">
        <div class="blue" role="alert" data-brk-library="component__alert">
        {/* <div class="myIcon"><FontAwesomeIcon icon={solid('window-close')} /></div> */}

          <div id="outer">

            <div class="inner"><strong class="font__weight-semibold">Heads up!</strong> Meeting Ends in 30 mins, Request for extension or confirm pickup.</div>
            <div class="inner"><button class="bkl" onClick={() => {history.push('/Extension')}}>Extend Request</button></div>
            <div class="inner"><button class="bkl" id="show" onClick={showSky}>Confirm Pickup</button></div>
          </div>
          
          
        </div>

      </div>



      <div class="red mainBar col-sm-12 alert fade alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show">
        <div id="outer" role="alert" data-brk-library="component__alert">
      {/* <FontAwesomeIcon icon={solid('window-close')} /> */}

          <strong class="inner font__weight-semibold">Warning!</strong> Meeting Ends Soon.
        </div>
      </div>

      <div id="showSky" class="sky mainBar col-sm-12 alert fade alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show">
        <div id="outer" role="alert" data-brk-library="component__alert">
      {/* <FontAwesomeIcon icon={solid('window-close')} /> */}

          <strong class="inner font__weight-semibold">Well done!</strong> Pickup confirmed.
        </div>

      </div>

    </div>
  </div>
</section>
    </>
  )
}
export default Notification
