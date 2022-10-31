import React, { useState} from "react";
import { FaGoogle } from "react-icons/fa";

import InputLog from "../../Components/InputLog";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "../../utils/validators";
import { useForm} from "../../hooks/form-hooks";

const LoginForm = () => {

  const [isLogged, setIsLogged] = useState(false);

  const [formState, inputHandler, setFormData] = useForm(
    {
      emailAddress: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const loggedHandler = () => {
    if (!isLogged) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined
        },
        formState.inputs.emailAddress.isValid && formState.inputs.password.isValid
      );
    }
    else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false
          }
        },
        false
      );
    }
    setIsLogged((prevLogg) => (!prevLogg));
  };

  return (
    <>
      <form
        className="login__Form-Box"
        method="POST"
        onClick={loggedHandler}
      >
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="login__Form-Input">
          <div>
            <InputLog
              element="input"
              id="emailAddress"
              type="email"
              label="Email Address"
              placeholder="Enter Email Address"
              validators={[VALIDATOR_EMAIL()]}
              errorText="Please Enter Valid Email Address"
              onInput={inputHandler}
             />
            {/*
            <label htmlFor="email-address" className="login__Form-Input--Label">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="login__Form-Input--Email"
              placeholder="Email address"
            />
            */}
          </div>
          <div>
          <InputLog
              element="input"
              id="pasword"
              type="password"
              label="Password"
              placeholder="Enter Password"
              validators={[VALIDATOR_MINLENGTH(8)]}
              errorText="Please Enter Valid Password"
              onInput={inputHandler}
             />
             {/*
            <label htmlFor="password" className="login__Form-Input--Label">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="login__Form-Input--Password"
              placeholder="Password"
            />
            */}
          </div>
        </div>

        <div className="login__Checkbox-Container">
          <div className="login__Checkbox-Container--Box">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="login__Checkbox-Container--InputBox"
            />
            <label
              htmlFor="remember-me"
              className="login__Checkbox-Container--Label"
            >
              Remember me
            </label>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group login__Button--Container-Btn"
          >
            <span className="login__Button--Container-BtnSpan"></span>
            Sign in
          </button>
        </div>

        <div className="login__Divider--Box">
          <p className="login__Divider--Text">Or</p>
        </div>

        <div>
          <button
            type="submit"
            className="group login__Social--Btn"
          >
            <span className="login__Social--Span">
              <FaGoogle
                className="login__Social--Span-Icon"
                aria-hidden="true"
              />
            </span>
            Sign in with Google
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
