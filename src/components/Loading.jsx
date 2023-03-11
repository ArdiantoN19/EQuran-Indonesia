import React from "react";
import logo from "../assets/quran.png";

export default function Loading() {
  return (
    <div className="w-full min-h-[76.2vh] flex flex-col items-center justify-center gap-8 animate-pulse md:min-h-[85.5vh]">
      <img
        src={logo}
        alt="LOGO"
        className="w-52 bg-light p-4 rounded-full block"
      />
      <h1 className="text-white text-4xl">E-Qur'an</h1>
    </div>
  );
}
