import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function ItemSurah({
  nomor,
  nama,
  namaLatin,
  tempatTurun,
  arti,
  jumlahAyat,
}) {
  return (
    <Link
      className="w-full border-2 border-secondary p-5 flex items-center justify-between rounded cursor-pointer text-light hover:bg-slate-700/50 md:w-[48%]"
      to={`/surat/${nomor}`}
    >
      <div className="flex items-center justify-center gap-6">
        <div className="bg-secondary rotate-45 w-12 h-12 text-2xl rounded flex items-center justify-center">
          <p className="-rotate-45">{nomor}</p>
        </div>
        <div>
          <h3 className="text-base">{namaLatin}</h3>
          <p className="text-sm text-yellow-300">( {arti} )</p>
          <p className="text-sm">{tempatTurun}</p>
        </div>
      </div>
      <div className="flex flex-col items-end justify-center">
        <p className="text-xl">{nama}</p>
        <p className="text-[.7em] text-slate-200">{jumlahAyat} Ayat</p>
      </div>
    </Link>
  );
}

ItemSurah.propTypes = {
  nomor: PropTypes.number.isRequired,
  nama: PropTypes.string.isRequired,
  namaLatin: PropTypes.string.isRequired,
  tempatTurun: PropTypes.string.isRequired,
  arti: PropTypes.string.isRequired,
  jumlahAyat: PropTypes.number.isRequired,
};
