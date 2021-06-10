import React, {useEffect} from "react";
import pads from "./pads";


function Instrument({setSoundPlayed}) {
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
          if (key === pad.key) {
            playAudio(key);
            setSoundPlayed(pad.sound);
          }
        });
      }

      return (
        <div>
          {pads.map((pad) => {
            return (
              <div
                className="drum-pad"
                key={pad.id}
                onClick={() => {
                  playAudio(pad.key);
                  setSoundPlayed(pad.id);
                }}
              >
                {pad.key}
                <audio className="clip" id={pad.key}>
                  <source src={pad.sound}></source>
                </audio>
              </div>
            );
          })}
        </div>
      );
}

export default Instrument;