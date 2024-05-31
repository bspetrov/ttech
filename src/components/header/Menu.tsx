import React, { useState } from "react";
import { MenuItem } from "./MobileMenu";

interface MenuType {
  menu: MenuItem;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({ menu, setShowNav }: MenuType) => {
  const [homeSubMenu, setHomeSubMenu] = useState(false);
  return (
    <React.Fragment>
      <li key={menu?.id} className={`nav-item`}>
        <div className="link-item">
          <a className={`mobile-nav-link`} href={menu?.link}>
            {menu?.text}
          </a>
          {menu?.dropdown?.length > 0 && (
            <button
              className="mobile-sub-nav-toggler"
              onClick={() => setHomeSubMenu((p) => !p)}
            >
              <i className="las la-angle-down"></i>
            </button>
          )}
        </div>
        <ul
          className={`mobile-sub-menu ${homeSubMenu ? "active" : ""}`}
          onClick={() => setShowNav((p) => !p)}
        >
          {menu?.dropdown?.length > 0 &&
            menu?.dropdown?.map((d) => (
              <li key={d?.id}>
                {/* <Link to={d?.link}>{d?.text}</Link> */}
                <a href={d?.link}>{d?.text}</a>
              </li>
            ))}
        </ul>
      </li>
    </React.Fragment>
  );
};

export default Menu;
