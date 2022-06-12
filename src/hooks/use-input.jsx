//use useState to create a custom 'useInput'
// import { useState } from "react";

// const useInput = (validation) => {
//   const [enteredValue, setEnteredValue] = useState("");
//   const [inputTouched, setInputTouched] = useState(false);

//   const enteredInputIsValid = validation(enteredValue);
//   const enteredValueHasError = !enteredInputIsValid && inputTouched;

//   const onChangeHandler = (e) => {
//     setEnteredValue(e.target.value);
//   };

//   const onBlueHandler = () => {
//     setInputTouched(true);
//   };

//   const resetInput = (e) => {
//     setEnteredValue("");
//     setInputTouched(false);
//   };

//   return {
//     enteredValue,
//     enteredInputIsValid,
//     enteredValueHasError,
//     onChangeHandler,
//     onBlueHandler,
//     resetInput,
//   };
// };

// export default useInput;

// use useReducer to create a custom 'useInput'

import { useReducer } from "react";

const initialState = {
  enteredValue: "",
  inputTouched: false,
};

const inputReducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return {
        enteredValue: action.payload,
        inputTouched : state.inputTouched,
      };
    case "BLUR" :
      return {
        enteredValue : state.inputValue,
        inputTouched : true,
      };
    case "RESEET" : 
      return {
        enteredValue: "",
        inputTouched: false,
      }
    default:
      return initialState;
  }
 
};

const useInput = (validation) => {
  const [inputState, dispatch] = useReducer(inputReducer, initialState);

  const inputValueIsValid = validation(inputState.enteredValue);
  const inputHasError = !inputValueIsValid && inputState.inputTouched;

  const onChangeHandler = (e) => {
    dispatch({ type: "INPUT", payload: e.target.value });
  };

  const onBlueHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const resetInput = () => {
    dispatch({ type: "RESET" });
  };

  return {
    enteredValue: inputState.inputValue,
    inputValueIsValid,
    inputHasError,
    onChangeHandler,
    onBlueHandler,
    resetInput,
  };
};


export default useInput;
