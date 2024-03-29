import { useReducer, useState, useEffect } from "react";

const useInput = (validateInput) => {
  const [error, setError] = useState(undefined);

  const initialInputState = {
    value: "",
    isTouched: undefined,
    isValid: undefined,
  };

  const inputReducer = (state, action) => {
    const { type, val } = action;
    switch (type) {
      case "SET_INPUT":
        return {
          value: val,
          isTouched: true,
          isValid: validateInput(val),
        };
      case "BLUR_INPUT":
        return {
          value: action.val,
          isTouched: true,
          isValid: state.isValid,
        };
      default:
        return state;
    }
  };

  const [inputState, dispatchInputState] = useReducer(
    inputReducer,
    initialInputState
  );

  const { value, isValid, isTouched } = inputState;

  const setInputHandler = (event) => {
    dispatchInputState({ type: "SET_INPUT", val: event.target.value });
  };

  const blurInputHandler = (event) => {
    dispatchInputState({ type: "BLUR_INPUT", val: event.target.value });
  };

  const resetInput = () => {
    dispatchInputState({ type: "RESET" });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setError(!isValid && isTouched);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [isValid, isTouched]);

  return {
    value,
    isValid,
    error,
    setInputHandler,
    blurInputHandler,
    resetInput,
  };
};

export default useInput;
