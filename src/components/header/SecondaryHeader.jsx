import { NavLink } from "react-router-dom";
import Logo from "./Logo";
const secondaryMenu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Order",
    path: "/order",
  },
  {
    name: "Order Review",
    path: "/order-review",
  },
  {
    name: "Manage Inventory",
    path: "/manage-inventory",
  },
  {
    name: "Login",
    path: "/login",
  },
];

function SecondaryHeader() {
  return (
    <header>
      <nav className="container flex justify-between items-center py-3">
        {/* logo */}
        <Logo></Logo>

        {/* menu */}
        <ul className="flex justify-end items-center gap-6 md:gap-8 font-bold ">
          {secondaryMenu.map((item, ind) => {
            return (
              <li key={ind}>
                <NavLink
                  className={({ isActive }) => {
                    return isActive ? "text-primary" : "text-dark2";
                  }}
                  to={item.path}
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default SecondaryHeader;
