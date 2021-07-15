import React, { useState, useEffect } from "react";
import pads from "./pads";

function Instrument({ soundPlayed, setSoundPlayed }) {
  const [isClicked, setIsClicked] = useState(false);

  const highlightPad = () => {
    setIsClicked(true);
    setTimeout(setIsClicked, 50, false);
  };

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

  useEffect(() => {
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keyup", upHandler);
    };
  }, []);

  function downHandler({ key }) {
    pads.map((pad) => {
      if (key.toUpperCase() === pad.key) {
        setIsClicked(true);
        playAudio(key.toUpperCase());
        setSoundPlayed(pad.chord);
      }
    });
  }

  function upHandler() {
    setIsClicked(false);
  }

  return (
    <div id="instrument">
      {pads.map((pad) => {
        return (
          <div
            id={pad.chord}
            className={`drum-pad ${
              soundPlayed === pad.chord && isClicked && "clicked"
            }`}
            key={pad.id}
            onClick={() => {
              playAudio(pad.key);
              setSoundPlayed(pad.chord);
              highlightPad();
            }}
          >
            {pad.key.toUpperCase()}
            <audio
              className="clip"
              id={pad.key}
              src={pad.sound}
              preload="auto"
            ></audio>
          </div>
        );
      })}
    </div>
  );
}

export default Instrument;
