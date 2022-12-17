import React from "react"
import "./signup.css"
import {useHistory} from 'react-router-dom';






const Signup2 = () => {
    let history = useHistory();
  
  


  return (
    <>
    <div className="f3">
    <form id="msform">
    
  
  
  <fieldset>
    <h2 class="fs-title">Personal Details</h2>
    <h3 class="fs-subtitle">We will never sell it</h3>
    <input type="text" name="fname" placeholder="First Name" />
    <input type="text" name="lname" placeholder="Last Name" />
    <input type="text" name="phone" placeholder="Phone" />
    <input type="text" name="Activity Preference" placeholder="Activity name" />
    <textarea name="address" placeholder="Address"></textarea>
    <input type="button" onClick={() => {history.push('/Signup1')}} name="previous" class="previous action-button" value="Previous" />
    <input type="submit" onClick={() => {history.push('/Told')}} name="submit" class="submit action-button" value="Submit" />
  </fieldset>
</form>
</div>

    </>
  )
}
export default Signup2
