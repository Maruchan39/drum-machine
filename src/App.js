import React, {useState} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Instrument from "./Instrument";
import Display from "./Display";
import "./index.css";
function App() {
  const [soundPlayed, setSoundPlayed] = useState("");
  return (
    <div id="drum-machine">
      <Instrument setSoundPlayed={setSoundPlayed} soundPlayed={soundPlayed}/>
      <Display soundPlayed={soundPlayed} />
    </div>
  );
}

export default App;
