import logoIcon from "../assets/bxs-briefcase.svg";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="wrapper">
          <div className="flex flex--navbar">
            <div className="flex flex--logo">
              <img src={logoIcon} alt="logo-icon" />
              <h3>Jobs</h3>
            </div>

            <nav className="nav nav--primary">
              <ul className="flex flex--nav">
                <li>
                  <a href="#" className="nav__link nav__link--active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="nav__link">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="nav__link">
                    Add Job
                  </a>
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
