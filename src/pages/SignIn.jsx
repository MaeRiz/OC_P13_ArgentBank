import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { loginUser, profileUser } from "../redux/slices/auth.slice";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const { userToken, isLoading, isError } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.name !== "remember") {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.checked,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData)).then((response) =>
      dispatch(profileUser(response.payload))
    );
  };

  if (userToken) {
    return <Navigate replace to="/profile" />;
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>

        <form className={isError ? "form-error" : null}>
          {isError ? (
            <p className="red-error">Wrong username or password</p>
          ) : null}
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
            />
          </div>

          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              name="remember"
              onChange={handleChange}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {!isLoading ? (
            <button className="sign-in-button" onClick={handleSubmit}>
              Sign In
            </button>
          ) : (
            <button
              className="sign-in-button"
              onClick={(e) => e.preventDefault()}
            >
              Loading ...
            </button>
          )}
        </form>
      </section>
    </main>
  );
};

export default SignIn;
