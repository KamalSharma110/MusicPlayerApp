import { NavLink } from "react-router-dom";
import classes from "./SideBar.module.css";
import logo from "../assets/logo.png";

const Nav = () => {
  return (
    <ul className="nav flex-column">
      <li className="nav-item my-5">
        <img src={logo} alt="" className="d-block mx-auto img-fluid" />
      </li>
      <li className="nav-item mb-3">
        <NavLink
          activeClassName={classes.active}
          className={`nav-link ${classes["text-gray"]}`}
          to="/discover"
        >
          <i className="bi bi-house me-2"></i>
          Discover
        </NavLink>
      </li>
      <li className="nav-item mb-3">
        <NavLink
          activeClassName={classes.active}
          className={`nav-link ${classes["text-gray"]}`}
          to="/aroundYou"
        >
          <i className="bi bi-image me-2"></i>
          Around You
        </NavLink>
      </li>
      <li className="nav-item mb-3">
        <NavLink
          activeClassName={classes.active}
          className={`nav-link ${classes["text-gray"]}`}
          to="/topArtists"
        >
          <i className="bi bi-people me-2"></i>
          Top Artists
        </NavLink>
      </li>
    </ul>
  );
};

const SideBar = () => {
  return (
    <div className={`col-auto col-lg-2 ${classes.background}`}>
      <button
        className={`btn d-lg-none`}
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
      >
        <i className="bi bi-list text-white fs-1"></i>
      </button>

      <div
        className={`offcanvas offcanvas-start d-lg-none ${classes['offcanvas-background']}`}
        tabIndex="-1"
        id="offcanvasExample"
      >
        <div className="offcanvas-header justify-content-end">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
            <Nav />
        </div>
      </div>

      <div className={`d-none d-lg-block ${classes['nav-container']}`}>
        <Nav />
      </div>
    </div>
  );
};

export default SideBar;
