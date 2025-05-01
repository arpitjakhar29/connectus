import React, { useState } from "react";
import styles from "./Sidebar.module.css";

const Sidebar = ({ selectedtab, setselectedtab }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`${styles.sidebar} d-flex flex-column flex-shrink-0 p-3 text-bg-dark`}
      style={{ width: isSidebarOpen ? "230px" : "0", overflow: "hidden" }}
    >
      <button
        className={styles["hamburger-button"]}
        onClick={handleToggleSidebar}
      >
        &#9776;
      </button>
      <a
        href="/"
        className={`d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none`}
      >
        <svg className="bi pe-none me-2" width="15" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-3">
          <strong>Options</strong>
        </span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={() => setselectedtab("Home")}>
          <a
            href="#"
            className={`${styles["nav-link"]} ${
              selectedtab === "Home" ? styles.active : ""
            }`}
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="22">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>
        </li>
        <li onClick={() => setselectedtab("Profile")}>
          <a
            href="#"
            className={`${styles["nav-link"]} ${
              selectedtab === "Profile" ? styles.active : ""
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="22">
              <use xlinkHref="#table"></use>
            </svg>
            Profile
          </a>
        </li>
        <li onClick={() => setselectedtab("Create Post")}>
          <a
            href="#"
            className={`${styles["nav-link"]} ${
              selectedtab === "Create Post" ? styles.active : ""
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="22">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </a>
        </li>
        <li className="nav-item" onClick={() => setselectedtab("Messages")}>
          <a
            href="#"
            className={`${styles["nav-link"]} ${
              selectedtab === "Messages" ? styles.active : ""
            }`}
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="22">
              <use xlinkHref="#home"></use>
            </svg>
            Messages
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className={`${styles["dropdown-toggle"]} d-flex align-items-center text-white text-decoration-none`}
          data-bs-toggle="dropdown"
          aria-expanded="true"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>Arpit29</strong>
        </a>
        <ul
          className={`${styles["dropdown-menu"]} dropdown-menu dropdown-menu-dark text-small shadow`}
        >
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
