
import React from "react";

const Header = ({ setselectedtab }) => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container-fluid">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
         
          <a
            href="/"
            className="d-flex align-items-center text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>

          
          <div className="ms-auto">
            <button
              type="button"
              className="btn btn-outline-light me-2"
              onClick={() => setselectedtab("Login")}
            >
              Login
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => setselectedtab("Signup")}
            >
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


