import React from "react";
import PropTypes, { object } from "prop-types";
import ItemAyat from "./ItemAyat";

export default function ListAyat({ ayat }) {
  return ayat.map((item) => <ItemAyat key={item.nomorAyat} {...item} />);
}

ListAyat.propTypes = {
  ayat: PropTypes.arrayOf(object).isRequired,
};
