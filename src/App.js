import React, {useState} from "react";
import Instrument from "./Instrument";
import Display from "./Display";
function App() {
  const [soundPlayed, setSoundPlayed] = useState("");
  return (
    <>
      <Instrument setSoundPlayed={setSoundPlayed} />
      <Display soundPlayed={soundPlayed} />
    </>
  );
}

export default App;
