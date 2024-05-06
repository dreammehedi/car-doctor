import { CgInstagram } from "react-icons/cg";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

function Social() {
  return (
    <ul className="flex justify-start gap-4 md:gap-6 text-white">
      <li className="p-2 bg-dark2 rounded-full group transition-all duration-300 ease-linear hover:bg-white">
        <a href="#">
          <FaFacebook className="group-hover:text-primary transition-all duration-300 ease-linear"></FaFacebook>
        </a>
      </li>
      <li className="p-2 bg-dark2 rounded-full group transition-all duration-300 ease-linear hover:bg-white">
        <a href="#">
          <FaTwitter className="group-hover:text-primary transition-all duration-300 ease-linear"></FaTwitter>
        </a>
      </li>
      <li className="p-2 bg-dark2 rounded-full group transition-all duration-300 ease-linear hover:bg-white">
        <a href="#">
          <CgInstagram className="group-hover:text-primary transition-all duration-300 ease-linear"></CgInstagram>
        </a>
      </li>
      <li className="p-2 bg-dark2 rounded-full group transition-all duration-300 ease-linear hover:bg-white">
        <a href="#">
          <FaLinkedin className="group-hover:text-primary transition-all duration-300 ease-linear"></FaLinkedin>
        </a>
      </li>
    </ul>
  );
}

export default Social;
