import { useState } from "react";

export default function useInput(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  const onChangeHandler = ({ target: { value } }) => {
    setValue(value);
  };
  return [value, onChangeHandler];
}
