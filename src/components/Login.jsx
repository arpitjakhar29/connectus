import { IoIosHome } from "react-icons/io";
import React from "react";
import styles from "./Login.module.css";

const Login = ({ setSelectedTab }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleGoToHomepage = () => {
    setSelectedTab("Home");
  };

  return (
    <div
      className={`container-fluid vh-100 d-flex justify-content-center align-items-center ${styles.bgLight}`}
    >
      <div
        className={`card p-4 shadow ${styles.card}`}
        style={{ maxWidth: "400px" }}
      >
        <h2 className={`text-center mb-4 ${styles.header}`}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className={`form-label ${styles.label}`}>
              Username
            </label>
            <input
              type="text"
              id="username"
              className={`form-control ${styles.input}`}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className={`form-label ${styles.label}`}>
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`form-control ${styles.input}`}
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className={`btn btn-primary w-100 ${styles.button}`}
          >
            Login
          </button>
        </form>
        <button
          type="button"
          className={`btn btn-secondary w-100 mt-3 ${styles.button}`}
          onClick={() => setSelectedTab("Home")}
        >
          <IoIosHome />
        </button>
      </div>
    </div>
  );
};

export default Login;
