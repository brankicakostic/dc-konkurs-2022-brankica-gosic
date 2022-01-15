import React, { useState } from "react";
import logo from "./logo.svg";
import eyeIcon from "./EyeIcon.svg";
import { signin } from "./api-auth";
import { AUTH_TOKEN } from "./constants";
import { PageContent, PageContentWrapper } from "./styledComponents/LoginPage";

const Login = () => {
  const [values, setValues] = useState({
    username: "brankica.gosic@gmail.com",
    password: "n56Xwrto",
    error: "",
    redirectToReferrer: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const clickSubmit = () => {
    const user = {
      username: values.username || undefined,
      password: values.password || undefined,
    };
    signin(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, error: "" });
        sessionStorage.setItem(AUTH_TOKEN, data.token);
      }
    });
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <PageContent>
      <PageContentWrapper>
        <img className="logo" alt="logo" src={logo} />
        <h3>Welcome</h3>
        <p>Fill in the fields to continue</p>
        <div className="input-container">
          <input
            value={values.username}
            onChange={handleChange("username")}
            name="username"
          ></input>
        </div>
        <div className="input-container">
          <input
            type={showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            name="password"
          ></input>
          <img
            onClick={() => setShowPassword(!showPassword)}
            alt="eye"
            src={eyeIcon}
            className="input-icon"
          />
        </div>
        {values.error && <p>{values.error}</p>}
        <button onClick={clickSubmit}>Log in</button>
      </PageContentWrapper>
    </PageContent>
  );
};

export default Login;
