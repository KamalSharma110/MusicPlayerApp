import { NavLink } from "react-router-dom";
import classes from "./SideBar.module.css";
// import { logo } from "../assets/index";

const Nav = () => {
  return (
    <ul className="nav flex-column">
      <li className="nav-item mb-3">
        <NavLink
          activeClassName={classes.active}
          className={`nav-link ${classes["text-gray"]}`}
          to="/"
        >
          <i class="bi bi-house me-2"></i>
          Discover
        </NavLink>
      </li>
      <li className="nav-item mb-3">
        <NavLink
          activeClassName={classes.active}
          className={`nav-link ${classes["text-gray"]}`}
          to="/"
        >
          <i class="bi bi-image me-2"></i>
          Around You
        </NavLink>
      </li>
      <li className="nav-item mb-3">
        <NavLink
          activeClassName={classes.active}
          className={`nav-link ${classes["text-gray"]}`}
          to="/"
        >
          <i class="bi bi-people me-2"></i>
          Top Artists
        </NavLink>
      </li>
      <li className="nav-item mb-3">
        <NavLink
          activeClassName={classes.active}
          className={`nav-link ${classes["text-gray"]}`}
          to="/"
        >
          <i class="bi bi-hash me-2"></i>
          Top Charts
        </NavLink>
      </li>
    </ul>
  );
};

const SideBar = () => {
  return (
    <div className="col-2">
      <button
        className={`btn d-lg-none`}
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasResponsive"
      >
        <i className="bi bi-list fs-2"></i>
      </button>

      <div
        className={`offcanvas-lg offcanvas-start ${classes.background}`}
        tabIndex="-1"
        id="offcanvasResponsive"
      >
        <div className="offcanvas-header">
          <img src={logo} alt="" />
          <button
            type="button"
            className={`btn-close ${classes["text-gray"]}`}
            data-bs-dismiss="offcanvas"
            data-bs-target="#offcanvasResponsive"
          ></button>
        </div>
        <div className="offcanvas-body">
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
