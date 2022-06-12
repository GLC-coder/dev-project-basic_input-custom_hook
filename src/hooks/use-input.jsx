import { useState } from "react";

const useInput = (validation) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const enteredInputIsValid = validation(enteredValue);
  const enteredValueHasError = !enteredInputIsValid && inputTouched;

  const onChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const onBlueHandler = () => {
    setInputTouched(true);
  };

  const resetInput = (e) => {
    setEnteredValue("");
    setInputTouched(false);
  };

  return {
    enteredValue,
    enteredInputIsValid,
    enteredValueHasError,
    onChangeHandler,
    onBlueHandler,
    resetInput,
  };
};

export default useInput;
