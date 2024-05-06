import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
function Logo() {
  return (
    <Link to="/">
      <img
        className="max-w-[150px] h-auto object-cover"
        src={logo}
        alt="Car Doctor"
      />
    </Link>
  );
}

export default Logo;
