import React from "react";
import useInput from "../../hooks/use-input";
import MessageBox from "../UI/MessageBox";

const AuthForm = () => {
  const validateEmail = (value) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return value.trim() !== "" && value.match(emailRegex);
  };

  const validatePassword = (value) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    return value.trim() !== "" && value.match(passwordRegex);
  };

  const {
    value: emailValue,
    isValid: emailIsValid,
    error: emailHasError,
    setInputHandler: setEmailInputHandler,
    blurInputHandler: blurEmailInputHandler,
    resetInput: resetEmailInputHandler,
  } = useInput((value) => validateEmail(value));

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    error: passwordHasError,
    setInputHandler: setPasswordInputHandler,
    blurInputHandler: blurPasswordInputHandler,
    resetInput: resetPasswordInputHandler,
  } = useInput((value) => validatePassword(value));

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
 const data = {
     email:emailValue,
     password:passwordValue
 }

 console.log(data);

    //send the request to the backend api to authenticate the user email and password

    resetEmailInputHandler();
    resetPasswordInputHandler();
  };

  const emailErrorMessage =
    "La email non dovrebbe essere vuota e il valore dovrebbe contenere almeno la @ e l'estensione del dominio";

  const passwordErrorMessage =
    "La password deve contenere almeno 1 carattere, 1 numero, 1 carattere minuscolo, 1 carattere maiuscolo , dovrebbe contenere almeno 8 caratteri, un massimo di 30 caratteri e almeno 1 carattere speciale";

  return (
    <form onSubmit={submitFormHandler}>
      <div className="group-controls">
        <label htmlFor="email">Email</label>
        <input
          value={emailValue}
          onChange={setEmailInputHandler}
          onBlur={blurEmailInputHandler}
          type="text"
          id="email"
        />
        {emailHasError && (
          <MessageBox variant="danger fs-small">{emailErrorMessage}</MessageBox>
        )}
      </div>
      <div className="group-controls">
        <label htmlFor="password">Password</label>
        <input
          value={passwordValue}
          onChange={setPasswordInputHandler}
          onBlur={blurPasswordInputHandler}
          type="text"
          id="password"
        />
        {passwordHasError && (
          <MessageBox variant="danger fs-small">
            {passwordErrorMessage}
          </MessageBox>
        )}
      </div>
      <div className="auth-actions">
        <button disabled={!formIsValid}>SignIn</button>
      </div>
    </form>
  );
};

export default AuthForm;
