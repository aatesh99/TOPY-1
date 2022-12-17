import React from "react"
import "./signup.css"
import {useHistory} from 'react-router-dom';






const Signup1 = () => {
    let history = useHistory();
    return (
        <>
        <div className="f2">
        <form id="msform">
     
      
   
      <fieldset>
        <h2 class="fs-title">Social Profiles</h2>
        <h3 class="fs-subtitle">Your presence on the social network</h3>
        <input type="text" name="twitter" placeholder="Twitter" />
        <input type="text" name="facebook" placeholder="Facebook" />
        <input type="text" name="gplus" placeholder="Google Plus" />
        <input type="button" onClick={() => {history.push('/Signup')}} name="previous" class="previous action-button" value="Previous" />
        <input type="button" onClick={() => {history.push('/Signup2')}}name="next" class="next action-button" value="Next" />
      </fieldset>
     
    </form>
    </div>
    
        </>
      )
    }
    export default Signup1