import React, {useState} from "react";
import Instrument from "./Instrument";
import Display from "./Display";
import "./index.css";
function App() {
  const [soundPlayed, setSoundPlayed] = useState("");
  return (
    <div id="drum-machine" className="container-fluid">
      <Instrument setSoundPlayed={setSoundPlayed} />
      <Display soundPlayed={soundPlayed} />
    </div>
  );
}

export default App;
