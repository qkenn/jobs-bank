import { Link } from "react-router-dom";
import logoIcon from "../assets/bxs-briefcase.svg";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="wrapper">
          <div className="flex flex--navbar">
            <Link to="/" className="flex flex--logo">
              <img src={logoIcon} alt="logo-icon" />
              <h3>Jobs</h3>
            </Link>

            <nav className="nav nav--primary">
              <ul className="flex flex--nav">
                <li>
                  <Link to="/" className="nav__link nav__link--active">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/jobs" className="nav__link">
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link to="/add-job" className="nav__link">
                    Add Job
                  </Link>
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
