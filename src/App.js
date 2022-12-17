import React from "react"
import Navbar from "./compoent/Navbar"
import Home from "./compoent/Home"
import About from "./compoent/About"
import Signin from "./compoent/Signin"
import Contact from "./compoent/Contact"
import Loginform from "./compoent/Loginform"
import Signup from "./compoent/Signup"
import Told from "./compoent/Told"
import Signup1 from "./compoent/Signup1"
import Signup2 from "./compoent/Signup2"
import MeetReq from "./compoent/MeetReq"
import Extension from "./compoent/Extension"
import Notification from "./compoent/Notification"
import { BrowserRouter as Router, Redirect, Switch, Route, withRouter,browserHistory } from "react-router-dom"


//npm install react-router-dom@5

function App() {
  return (
    <>
      <Router>
        
       
        <Navbar />

        <Switch>
          <Route path='/' compoent={Home} exact>
            <Home />
          </Route>
          <Route path='/about' compoent={About} exact>
            <About />
          </Route>
          <Route path='/Contact' compoent={Contact} exact>
            <Contact />
          </Route>
          <Route path='/Signin' compoent={Signin} exact>
            <Signin />
          </Route>
          <Route path='/Signup' compoent={Signup} exact>
            <Signup />
          </Route>
          <Route path='/Signup1' compoent={Signup1} exact>
            <Signup1 />
          </Route>
          <Route path='/Signup2' compoent={Signup2} exact>
            <Signup2 />
          </Route>
          <Route path='/meetReq' compoent={MeetReq} exact>
            <MeetReq />
          </Route>
          <Route path='/Notification' compoent={Notification} exact>
            <Notification />
          </Route>
          <Route path='/Told' compoent={Told} exact>
            <Told />
          </Route>
          <Route path='/Extension' compoent={Extension} exact>
            <Extension />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
