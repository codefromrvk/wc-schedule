import { useState } from "react";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";

const Sound = () => {
  const [sound, setSound] = useState(false);
  const handleToggleSound = () => {
    const currentState = !sound;

    if (currentState) {
      const clickableBtnList =
        document.getElementsByClassName("btn-click-audio");
      for (let btn of clickableBtnList) {
        btn.classList.remove("btn-click-audio");
      }
    }
    setSound(currentState);
  };

  return (
    <>
      {sound ? (
        <GiSpeaker size={25} onClick={handleToggleSound} />
      ) : (
        <GiSpeakerOff size={25} onClick={handleToggleSound} />
      )}
    </>
  );
};

export default Sound;
