import React, { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { OffCanvas, SearchArea } from "..";
import "./header.css";
import MobileMenu from "./MobileMenu";

type OutletContextType = [boolean];

const HeaderArea: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>("home");
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showOffcanvas, setShowOffcanvas] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);

  const [scrolled] = useOutletContext() as OutletContextType;

  return (
    <React.Fragment>
      <header className="header-area">
        <div
          className={`sticky-area ${scrolled ? "header__fixed is-sticky" : ""}`}
        >
          <div className="navigation">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <div className="logo">
                    <Link className="navbar-brand" to="/">
                      <img src="/ttech/assets/img/logo.png" alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="main-menu">
                    <nav className="navbar navbar-expand-lg">
                      <button
                        onClick={() => setShowNav((p) => !p)}
                        className={`navbar-toggler ${showNav ? "active" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                      </button>

                      <div
                        className="collapse navbar-collapse justify-content-center prev-nav"
                        id="navbarSupportedContent"
                      >
                        <ul className="navbar-nav m-auto">
                          <li className="nav-item smooth-menu">
                            <Link
                              to="/"
                              onMouseEnter={() => setActiveMenu("contact")}
                              className={`nav-link ${
                                activeMenu === "contact" ? "active" : ""
                              }`}
                            >
                              Начало
                            </Link>
                          </li>

                          <li className="nav-item smooth-menu">
                            <Link
                              to="/services"
                              onMouseEnter={() => setActiveMenu("contact")}
                              className={`nav-link ${
                                activeMenu === "contact" ? "active" : ""
                              }`}
                            >
                              Услуги
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              to="/projects/metalwork"
                              onMouseEnter={() => setActiveMenu("projects")}
                              className={`nav-link ${
                                activeMenu === "projects" ? "active" : ""
                              }`}
                            >
                              Металообработка
                              <span className="sub-nav-toggler"> </span>
                            </Link>
                            <ul className="sub-menu">
                              <li>
                                <Link to="/project/machine-elements">
                                  Машинни елементи
                                </Link>
                              </li>
                              <li>
                                <Link to="/project/others">Други</Link>
                              </li>
                            </ul>
                          </li>

                          <li className="nav-item">
                            <Link
                              to="/projects/woodwork"
                              onMouseEnter={() => setActiveMenu("projects")}
                              className={`nav-link ${
                                activeMenu === "projects" ? "active" : ""
                              }`}
                            >
                              Дървообработка
                              <span className="sub-nav-toggler"> </span>
                            </Link>
                            <ul className="sub-menu">
                              <li>
                                <Link to="/project/table-tops">
                                  Плотове за маси
                                </Link>
                              </li>
                              <li>
                                <Link to="/project/table-legs">
                                  Крака за маси
                                </Link>
                              </li>
                              <li>
                                <Link to="/project/finished-tables">
                                  Готови маси
                                </Link>
                              </li>
                              <li>
                                <Link to="/project/chairs">Столове</Link>
                              </li>
                              <li>
                                <Link to="/project/others">Други</Link>
                              </li>
                            </ul>
                          </li>

                          <li className="nav-item smooth-menu">
                            <Link
                              to="/about"
                              onMouseEnter={() => setActiveMenu("contact")}
                              className={`nav-link ${
                                activeMenu === "contact" ? "active" : ""
                              }`}
                            >
                              За нас
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <MobileMenu showNav={showNav} setShowNav={setShowNav} />
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <SearchArea showSearch={showSearch} setShowSearch={setShowSearch} />
      <OffCanvas
        showOffcanvas={showOffcanvas}
        setShowOffcanvas={setShowOffcanvas}
      />
    </React.Fragment>
  );
};

export default HeaderArea;
