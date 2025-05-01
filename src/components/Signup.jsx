import { IoIosHome } from "react-icons/io";
import React from "react";
import styles from "./Signup.module.css";

const Signup = ({ setSelectedTab }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`container-fluid vh-100 d-flex justify-content-center align-items-center ${styles.bgLight}`}
    >
      <div
        className={`card p-4 shadow ${styles.card}`}
        style={{ maxWidth: "400px" }}
      >
        <h2 className={`text-center mb-4 ${styles.header}`}>Sign Up</h2>
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
            <label htmlFor="email" className={`form-label ${styles.label}`}>
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`form-control ${styles.input}`}
              placeholder="Enter your email"
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
          <button type="submit" className={`btn ${styles.button} w-100`}>
            Sign Up
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

export default Signup;
