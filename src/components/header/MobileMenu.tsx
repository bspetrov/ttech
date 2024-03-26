import "./mobileMenu.css";

import useGetData from "../../hooks/useGetData";
import Menu from "./Menu";

interface BaseItem {
  id: string;
  text: string;
  link: string;
}

export interface MenuItem extends BaseItem {
  dropdown: DropDown[];
}
type DropDown = BaseItem;

interface RequestObject {
  menu: MenuItem[];
}
interface MobileMenuType {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ showNav, setShowNav }: MobileMenuType) => {
  const request: RequestObject = useGetData({}, "/data/menu.json");
  const menu = request.menu;
  return (
    <div className={`mobile-nav  ${showNav ? "active" : ""}`}>
      <ul className="navbar-nav m-auto">
        {menu?.length > 0 &&
          menu?.map((m) => (
            <Menu key={m?.id} menu={m} setShowNav={setShowNav} />
          ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
