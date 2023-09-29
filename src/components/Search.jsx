import React, { useContext } from "react";
import LocalContext from "../context/Context";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const { onClickSearchHandler, surahs } = useContext(LocalContext);
  const [search, onSearchHandler] = useInput("");
  const navigate = useNavigate();

  const filterSurah = (value, datas) => {
    // const result = datas.filter((data) =>
    //   Object.keys(data).some((key) => data[key].includes(value))
    // );

    const result = datas.filter(({ namaLatin }) =>
      namaLatin.toLowerCase().includes(value.toLowerCase())
    );
    return result;
  };

  const directToDetailSurah = (nomor) => {
    navigate(`/surat/${nomor}`);
    onClickSearchHandler();
  };

  const results = filterSurah(search, surahs);
  return (
    <>
      <div
        className="fixed top-0 h-[100vh] w-full backdrop-opacity-10 bg-slate-700/80 z-[100]"
        onClick={onClickSearchHandler}
      ></div>
      <div className="sticky w-full h-[100vh] flex translate-y-40 justify-center  z-[101]">
        <div className="absolute w-[350px] md:w-[450px] lg:w-[500px]">
          <div className="relative w-full text-lg px-5 h-14 rounded-lg bg-light">
            <input
              type="text"
              className="w-full h-full bg-transparent border-none outline-none tracking-wider"
              value={search}
              onChange={onSearchHandler}
              placeholder="Cari surah disini"
            />
            <div className="absolute top-3 right-3 bg-light p-1 rounded-full">
              <box-icon type="regular" name="search"></box-icon>
            </div>
          </div>
          {search && (
            <div className="absolute top-16 w-full h-[250px] rounded-lg bg-light p-3 overflow-auto">
              {!results.length ? (
                <div className="w-full h-full flex items-center justify-center flex-col">
                  <box-icon
                    type="regular"
                    name="folder-open"
                    size="3em"
                    color="#aaa"
                  ></box-icon>
                  <p className="text-center">Data tidak ditemukan</p>
                </div>
              ) : (
                results.map((result) => (
                  <div
                    key={result.nomor}
                    className="flex justify-between items-center rounded-sm p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => directToDetailSurah(result.nomor)}
                  >
                    <div>
                      <h3 className="text-base">{result.namaLatin}</h3>
                      <p className="text-sm text-slate-700">
                        ( {result.arti} )
                      </p>
                    </div>
                    <div>
                      <p className="text-xl">{result.nama}</p>
                      <p className="text-[.7em] text-slate-700">
                        {result.jumlahAyat} Ayat
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
