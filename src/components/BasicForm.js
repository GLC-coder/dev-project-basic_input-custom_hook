import React, { useState, useEffect } from "react";
import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const firstNnameValidation = (enteredValue) =>
    enteredValue.trim().length !== 0;

  const {
    enteredValue: enteredFirstName,
    enteredInputIsValid: enteredFirstNameIsValid,
    enteredValueHasError: firstNameHasError,
    onChangeHandler: onFirstNameChangeHandler,
    onBlueHandler: onFirstNameBlurHandler,
    resetInput: resetFirstNameInput,
  } = useInput(firstNnameValidation);

  const LastNnameValidation = (enteredValue) =>
    enteredValue.trim().length !== 0;

  const {
    enteredValue: enteredLastName,
    enteredInputIsValid: enteredLastNameIsValid,
    enteredValueHasError: lastNameHasError,
    onChangeHandler: onLastNameChangeHandler,
    onBlueHandler: onLastNameBlurHandler,
    resetInput: resetLastNameInput,
  } = useInput(LastNnameValidation);

  const emailValidation = (enteredValue) => enteredValue.trim().includes("@");

  const {
    enteredValue: enteredEmail,
    enteredInputIsValid: enteredEmailIsValid,
    enteredValueHasError: emailHasError,
    onChangeHandler: onEmailChangeHandler,
    onBlueHandler: onEmailBlurHandler,
    resetInput: resetEmailInput,
  } = useInput(emailValidation);

  useEffect(() => {
    if (
      enteredFirstNameIsValid &&
      enteredLastNameIsValid &&
      enteredEmailIsValid
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredFirstNameIsValid, enteredLastNameIsValid, enteredEmailIsValid]);

  const onFormSubmitHandler = (e) => {
    e.preventDefault();

    if (
      !enteredFirstNameIsValid ||
      !enteredLastNameIsValid ||
      !enteredEmailIsValid
    ) {
      return;
    }
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const FnClasses = firstNameHasError ? "form-control invalid" : "form-control";
  const LnClasses = lastNameHasError ? "form-control invalid" : "form-control ";
  const EmailClasses = emailHasError ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={onFormSubmitHandler}>
      <div className="control-group">
        <div className={FnClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFirstName}
            onChange={onFirstNameChangeHandler}
            onBlur={onFirstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">First Name can not be empty!</p>
          )}
        </div>
        <div className={LnClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={onLastNameChangeHandler}
            onBlur={onLastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Last Name can not be empty!</p>
          )}
        </div>
      </div>
      <div className={EmailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={onEmailChangeHandler}
          onBlur={onEmailBlurHandler}
        />
        {emailHasError && <p className="error-text">Email is invalid!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
