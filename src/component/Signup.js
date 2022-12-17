import React from "react"
import "./signup.css"
import {useHistory} from 'react-router-dom';






const Signup = () => {
  let history = useHistory();
  
  


  return (
    <>
    <div className="f1"><form id="msform">
  
  
  <fieldset>
    <h2 class="fs-title">Create your account</h2>
    <h3 class="fs-subtitle">This is step 1</h3>
    <input type="text" name="email" placeholder="Email" />
    <input type="password" name="pass" placeholder="Password" />
    <input type="password" name="cpass" placeholder="Confirm Password" />
    <input type="button" onClick={() => {history.push('/Signup1')}} name="next" class="next action-button" value="Next" />
  </fieldset>
  
</form>
</div>
    
    </>
  )
}
export default Signup
