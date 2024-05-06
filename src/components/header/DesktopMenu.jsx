import { NavLink } from "react-router-dom";
import MenuContent from "./MenuContent";
function DesktopMenu() {
  return (
    <ul className="flex justify-center items-center gap-6 md:gap-8 font-bold ">
      {MenuContent.map((menu, ind) => {
        return (
          <li key={ind}>
            <NavLink
              to={menu.path}
              className={({ isActive }) => {
                return isActive ? "text-primary" : "text-dark2";
              }}
            >
              {menu.name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default DesktopMenu;
