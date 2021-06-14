import React, {useState} from "react";
import Instrument from "./Instrument";
import Display from "./Display";
function App() {
  const [soundPlayed, setSoundPlayed] = useState("");
  return (
    <div id="drum-machine">
      <Instrument setSoundPlayed={setSoundPlayed} />
      <Display soundPlayed={soundPlayed} />
    </div>
  );
}

export default App;
