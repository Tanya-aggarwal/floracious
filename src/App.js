import React from "react";
import Navbarflo from "./components/Navbarflo"
import 'bootstrap/dist/css/bootstrap.min.css';
import Aboutus from "./components/Aboutus";
import Footor from "./components/Footor";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import Widget from "./components/Widget"
import Contactus from "./components/Contactus"
import Carddiv from "./components/Carddiv";
import ControlledCarousel from "./components/ControlledCarousel"




library.add(faStroopwafel)
function App() {
  

  return (

    <div className="App">
        
        <Navbarflo />
        <ControlledCarousel />
        <Aboutus />
        <Carddiv />
        <div className="abouttitle">
                   <p> #Floracious_ </p>
                   </div>

                   <p style={{fontFamily:"Montserrat",fontSize:"30px",textAlign:"center"}}> Check our Instagram</p>
        <Widget />
<Footor />

    </div>
  );
}

export default App;
