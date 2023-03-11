import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import parser from "html-react-parser";
import { getDetailSurah } from "../utils/api";
import LocalContext from "../context/Context";
import ListAyat from "../components/ListAyat";
import Loading from "../components/Loading";

export default function DetailPage() {
  const { nomor } = useParams();
  const [detailSurah, setDetailSurah] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isDeskripsi, setIsDeskripsi] = useState(false);
  const [isSetting, setIsSetting] = useState(false);

  const [isChecked, setIsChecked] = useState({
    latin: false,
    arti: false,
    audio: false,
  });

  const onChangeCheckboxHandler = ({ target: { id, checked } }) => {
    let check = { ...isChecked };
    check[id] = checked;
    setIsChecked(check);
  };

  useEffect(() => {
    const fetchDetailSurah = async () => {
      const dataDetail = await getDetailSurah(nomor);
      setTimeout(() => {
        setDetailSurah(dataDetail);
        setIsLoading(false);
      }, 2000);
    };

    fetchDetailSurah();
  }, [nomor]);

  const {
    nama,
    namaLatin,
    jumlahAyat,
    tempatTurun,
    arti,
    deskripsi,
    audioFull,
    ayat,
    suratSelanjutnya,
    suratSebelumnya,
  } = detailSurah;

  const onPopupDeskripsiHandler = () => {
    setIsDeskripsi((state) => !state);
    setIsSetting(false);
  };

  const onPopupSettingHandler = () => {
    setIsSetting((state) => !state);
    setIsDeskripsi(false);
  };

  const contextValue = useMemo(() => {
    return {
      isChecked,
    };
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <LocalContext.Provider value={contextValue}>
      <div className="min-h-screen text-light px-1 mx-auto md:max-w-2xl">
        <div className="w-full flex justify-between items-center relative">
          <button className="cursor-pointer" onClick={onPopupDeskripsiHandler}>
            <box-icon
              type="regular"
              name="info-square"
              color="white"
              size="1.7em"
            ></box-icon>
          </button>
          <div
            className={`absolute w-full top-9 left-0 bg-light text-secondary rounded p-4 z-10 origin-top-left transition duration-300 shadow-inner shadow-slate-300 ${
              isDeskripsi ? "scale-100" : "scale-0"
            }`}
          >
            <p>{parser(deskripsi)}</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <Link
              to={`/surat/${suratSebelumnya.nomor}`}
              className={`${suratSebelumnya ? "" : "hidden"}`}
            >
              <box-icon
                type="regular"
                name="chevron-left"
                color="white"
                size="1.7em"
              ></box-icon>
            </Link>
            <p className="text-xl">{nama}</p>
            <Link
              to={`/surat/${suratSelanjutnya.nomor}`}
              className={`${suratSelanjutnya ? "" : "hidden"}`}
            >
              <box-icon
                type="regular"
                name="chevron-right"
                color="white"
                size="1.7em"
              ></box-icon>
            </Link>
          </div>
          <button className="cursor-pointer" onClick={onPopupSettingHandler}>
            <box-icon
              type="regular"
              name="dots-vertical"
              color="white"
              size="1.7em"
            ></box-icon>
          </button>
          <div
            className={`absolute w-auto top-9 right-0 bg-light text-secondary rounded p-4 z-10 origin-top-right transition duration-300 shadow-inner shadow-slate-300 ${
              isSetting ? "scale-100" : "scale-0"
            }`}
          >
            <ul className="flex flex-col gap-1">
              <li>
                <input
                  type="checkbox"
                  id="latin"
                  onChange={onChangeCheckboxHandler}
                />
                <label htmlFor="latin">Latin</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="arti"
                  onChange={onChangeCheckboxHandler}
                />
                <label htmlFor="arti">Arti</label>
              </li>
              <li>
                <input type="checkbox" id="audio" />
                <label htmlFor="audio">Audio</label>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full text-center py-4 my-6">
          <h3 className="text-4xl font-bold mb-3">{namaLatin}</h3>
          <p className="mb-3 text-yellow-300">( {arti} )</p>
          <p>
            {tempatTurun} - {jumlahAyat} Ayat
          </p>
        </div>
        <ListAyat ayat={ayat} />
      </div>
    </LocalContext.Provider>
  );
}
