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
        className="fixed top-0 min-h-full w-full backdrop-opacity-10 bg-slate-700/80 z-[100]"
        onClick={onClickSearchHandler}
      ></div>
      <div className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 z-[101]">
        <div className="relative w-[450px] text-lg px-5 h-14 rounded-lg bg-light">
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
          <div className="absolute top-16 w-[450px] h-[250px] rounded-lg bg-light p-3 overflow-auto">
            {results.map((result) => (
              <div
                key={result.nomor}
                className="flex justify-between items-center rounded-sm p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => directToDetailSurah(result.nomor)}
              >
                <div>
                  <h3 className="text-base">{result.namaLatin}</h3>
                  <p className="text-sm text-slate-700">( {result.arti} )</p>
                </div>
                <div>
                  <p className="text-xl">{result.nama}</p>
                  <p className="text-[.7em] text-slate-700">
                    {result.jumlahAyat} Ayat
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
