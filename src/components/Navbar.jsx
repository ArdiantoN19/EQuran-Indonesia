import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import LocalContext from "../context/Context";
import Search from "./Search";

export default function Navbar() {
  const { isSearch, onClickSearchHandler } = useContext(LocalContext);

  return (
    <nav className="bg-slate-700/60 absolute top-0 left-0 w-full z-10 border-b border-b-slate-400">
      <div className="container lg:px-20">
        <div className="flex items-center justify-between relative py-3">
          <Link className="text-3xl font-semibold text-light" to="/">
            E-Qur'an
          </Link>
          <div className="flex items-center justify-center gap-3">
            <button
              title="search"
              className="flex items-center justify-center rounded-full p-1 hover:bg-opacity-50 hover:bg-slate-400 hover:border-slate-300 "
              onClick={onClickSearchHandler}
            >
              <box-icon type="regular" name="search" color="white"></box-icon>
            </button>
          </div>
        </div>
      </div>
      <div className="ease-in-out transition duration-300">
        {isSearch && <Search />}
      </div>
    </nav>
  );
}
