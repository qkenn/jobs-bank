import { NavLink } from "react-router-dom";
import logoIcon from "../assets/bxs-briefcase.svg";

export default function Header() {
  const navClass = ({ isActive }) =>
    isActive ? "nav__link nav__link--active" : "nav__link";
  return (
    <>
      <header className="header">
        <div className="wrapper">
          <div className="flex flex--navbar">
            <NavLink to="/" className="flex flex--logo">
              <img src={logoIcon} alt="logo-icon" />
              <h3>Jobs</h3>
            </NavLink>

            <nav className="nav nav--primary">
              <ul className="flex flex--nav">
                <li>
                  <NavLink to="/" className={navClass}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/jobs" className={navClass}>
                    Jobs
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/add-job" className={navClass}>
                    Add Job
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div className="ham-menu">
              <div className="ham-menu__container">
                <div className="ham-menu__bar"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
