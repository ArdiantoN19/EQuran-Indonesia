import React from "react";
import PropTypes, { object } from "prop-types";
import ItemSurah from "./ItemSurah";

export default function ListSurah({ surahs }) {
  return (
    <div>
      <h2 className="text-white text-3xl font-semibold mb-6">Daftar Surah</h2>
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:flex-shrink md:flex-wrap">
        {surahs.map((surah) => (
          <ItemSurah key={surah.nomor} {...surah} />
        ))}
      </div>
    </div>
  );
}

ListSurah.propTypes = {
  surahs: PropTypes.arrayOf(object).isRequired,
};
