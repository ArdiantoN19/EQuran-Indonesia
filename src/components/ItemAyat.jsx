import React, { useRef, useState, useContext } from "react";
import PropTypes from "prop-types";
import LocalContext from "../context/Context";
import speaker from "../assets/speaker.svg";

export default function ItemAyat({
  nomorAyat,
  teksArab,
  teksLatin,
  teksIndonesia,
  audio,
}) {
  const {
    isChecked: { latin: latinChecked, arti: artiChecked, audio: audioCheked },
  } = useContext(LocalContext);

  const [isPlaying, setIsPlaying] = useState(false);
  const audioName = useRef("");
  const onAudioHandler = () => {
    setIsPlaying((state) => !state);
    audioName.current.play();
  };

  return (
    <div className="my-7 px-5 py-5 rounded bg-slate-700/50">
      <div className="relative">
        <div className="absolute -top-7 -left-7 h-8 w-8 bg-light text-xl text-primary rounded rotate-45 flex items-center justify-center shadow shadow-primary">
          <p className="-rotate-45">{nomorAyat}</p>
        </div>
        <div className="mb-3">
          <h3 className="text-3xl mb-7 w-full text-end">{teksArab}</h3>
          <p
            className={`text-md text-yellow-300 w-full mb-3 ${
              latinChecked ? "block" : "hidden"
            }`}
          >
            {teksLatin}
          </p>
          <p className={`text-md w-full ${artiChecked ? "block" : "hidden"}`}>
            {teksIndonesia}
          </p>
        </div>
        <div className="flex items-center justify-end gap-3">
          <button
            className="text-white p-1 rounded-full hover:bg-secondary"
            onClick={onAudioHandler}
          >
            <img src={speaker} alt="speaker" className="w-5 h-5 fill-current" />
            <audio src={audio["02"]} ref={audioName} />
          </button>
        </div>
      </div>
    </div>
  );
}

ItemAyat.propTypes = {
  nomorAyat: PropTypes.number.isRequired,
  teksArab: PropTypes.string.isRequired,
  teksLatin: PropTypes.string.isRequired,
  teksIndonesia: PropTypes.string.isRequired,
  audio: PropTypes.object.isRequired,
};
