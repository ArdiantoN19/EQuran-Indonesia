import React from "react";
import PropTypes, { object } from "prop-types";
import ListSurah from "../components/ListSurah";
import Loading from "../components/Loading";

export default function Homepage({ surahs }) {
  if (!surahs.length) {
    return <Loading />;
  }
  return (
    <div className="max-w-md mx-auto md:max-w-2xl lg:max-w-[50rem]">
      <ListSurah surahs={surahs} />
    </div>
  );
}

Homepage.propTypes = {
  surahs: PropTypes.arrayOf(object).isRequired,
};
