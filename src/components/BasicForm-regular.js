import React, { useState, useEffect } from "react";
const BasicForm = (props) => {
  const [enteredFname, setEnteredFname] = useState("");
  const [fNameTouched, setFnameTouched] = useState(false);
  const [enteredLname, setEnteredLname] = useState("");
  const [lNameTouched, setLnameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const enteredFnameIsValid = enteredFname.trim().length !== 0;
  const enteredLnameIsValid = enteredLname.trim().length !== 0;
  const enteredEmailIsValid = enteredEmail.trim().includes("@");
  useEffect(() => {
    if (enteredFnameIsValid && enteredLnameIsValid && enteredEmailIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredFnameIsValid, enteredLnameIsValid, enteredEmailIsValid]);

  const fNameHasError = !enteredFnameIsValid && fNameTouched;
  const lNameHasError = !enteredLnameIsValid && lNameTouched;
  const emailHasError = !enteredEmailIsValid && emailTouched;

  const onFnanmeChangeHandler = (e) => {
    setEnteredFname(e.target.value);
  };

  const onFnameBlueHandler = () => {
    setFnameTouched(true);
  };

  const onLnanmeChangeHandler = (e) => {
    setEnteredLname(e.target.value);
  };

  const onLnameBlueHandler = () => {
    setLnameTouched(true);
  };

  const onEmailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const onEmailBlueHandler = () => {
    setEmailTouched(true);
  };

  const onFormSubmitHandler = (e) => {
    e.preventDefault();

    if (!enteredFnameIsValid || !enteredLnameIsValid || !enteredEmailIsValid) {
      return;
    }

    setEnteredFname("");
    setEnteredLname("");
    setEnteredEmail("");
    setFnameTouched(false);
    setLnameTouched(false);
    setEmailTouched(false);
  };

  const FnClasses = fNameHasError ? "form-control invalid" : "form-control";
  const LnClasses = lNameHasError ? "form-control invalid" : "form-control ";
  const EmailClasses = emailHasError ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={onFormSubmitHandler}>
      <div className="control-group">
        <div className={FnClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFname}
            onChange={onFnanmeChangeHandler}
            onBlur={onFnameBlueHandler}
          />
          {fNameHasError && (
            <p className="error-text">First Name can not be empty!</p>
          )}
        </div>
        <div className={LnClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLname}
            onChange={onLnanmeChangeHandler}
            onBlur={onLnameBlueHandler}
          />
          {lNameHasError && (
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
          onBlur={onEmailBlueHandler}
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
