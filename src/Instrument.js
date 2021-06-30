import React, { useEffect } from "react";
import pads from "./pads";

function Instrument({ setSoundPlayed }) {
  const playAudio = (padkey) => {
    let sound = document.getElementById(padkey);
    sound.currentTime = 0;
    sound.play();
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, []);

  function downHandler({ key }) {
    pads.map((pad) => {
      if (key.toUpperCase() === pad.key) {
        playAudio(key.toUpperCase());
        setSoundPlayed(pad.chord);
      }
    });
  }

  return (


    <div id="instrument">
      {pads.map((pad) => {
        return (
          <div id={pad.chord}
            className="drum-pad"
            key={pad.id}
            onClick={() => {
              playAudio(pad.key);
              setSoundPlayed(pad.chord);
            }}
          >
            {pad.key.toUpperCase()}
            <audio className="clip" id={pad.key} src={pad.sound} preload="auto">
            </audio>
          </div>
        );
      })}
    </div>
  );
}

export default Instrument;
