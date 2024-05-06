import { NavLink } from "react-router-dom";
import Logo from "../header/Logo";
import Social from "../social/Social";
function Footer() {
  return (
    <footer className="bg-dark1 py-8 md:py-12 lg:py-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-center items-center md:justify-between md:items-start gap-4 md:gap-8">
        <div className="md:col-span-2 flex flex-col space-y-3">
          <Logo></Logo>
          <p className="text-dark6 w-full md:max-w-xs">
            Edwin Diaz is a software and web technologies engineer, a life coach
            trainer who is also a serial .
          </p>
          <Social></Social>
        </div>
        <div>
          <h3 className="text-white text-2xl mb-8">About</h3>
          <ul className="flex flex-col space-y-3">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) => {
                  return isActive ? "text-primary" : "text-dark7";
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/services"}
                className={({ isActive }) => {
                  return isActive ? "text-primary" : "text-dark7";
                }}
              >
                Service
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={({ isActive }) => {
                  return isActive ? "text-primary" : "text-dark7";
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-2xl mb-8">Company</h3>
          <ul className="flex flex-col space-y-3">
            <li>
              <NavLink
                to={"/why-car-doctor"}
                className={({ isActive }) => {
                  return isActive ? "text-primary" : "text-dark7";
                }}
              >
                Why Car Doctor
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) => {
                  return isActive ? "text-primary" : "text-dark7";
                }}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-2xl mb-8">Support</h3>
          <ul className="flex flex-col space-y-3">
            <li>
              <NavLink
                to={"/support-center"}
                className={({ isActive }) => {
                  return isActive ? "text-primary" : "text-dark7";
                }}
              >
                Support Center
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/feedback"}
                className={({ isActive }) => {
                  return isActive ? "text-primary" : "text-dark7";
                }}
              >
                Feedback
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/accesbility"}
                className={({ isActive }) => {
                  return isActive ? "text-primary" : "text-dark7";
                }}
              >
                Accesbility
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
