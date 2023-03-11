import React, { useContext } from "react";
import LocalContext from "../context/Context";
import useInput from "../hooks/useInput";

export default function Search() {
  const { onClickSearchHandler } = useContext(LocalContext);
  const [search, onSearchHandler] = useInput("");
  return (
    <div
      className="fixed top-0 min-h-full w-full flex items-center justify-center backdrop-opacity-10 bg-slate-700/80 "
      onClick={onClickSearchHandler}
    >
      <div className="relative w-[320px] px-5 h-12 rounded-full bg-light">
        <input
          type="text"
          className="w-full h-full bg-transparent border-none outline-none"
          value={search}
          onChange={onSearchHandler}
        />
        <div className="absolute top-2 right-3 bg-light p-1 rounded-full">
          <box-icon type="regular" name="search"></box-icon>
        </div>
      </div>
    </div>
  );
}
