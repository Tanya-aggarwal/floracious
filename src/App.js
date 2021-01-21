import React from "react";
import Navbarflo from "./components/Navbarflo"
import 'bootstrap/dist/css/bootstrap.min.css';
import Aboutus from "./components/Aboutus";
import Footor from "./components/Footor";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import Widget from "./components/Widget"

library.add(faStroopwafel)
function App() {
  return (
    <div className="App">
        
        <Navbarflo />
        
        <Aboutus />
        <Widget />
<Footor />

    </div>
  );
}

export default App;
