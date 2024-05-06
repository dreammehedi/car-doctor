import { FaSearch } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";

function MenuIcons() {
  return (
    <div className="flex justify-center items-center gap-4">
      <LuShoppingCart className="text-xl"></LuShoppingCart>
      <FaSearch className="text-xl"></FaSearch>
      <button className="btn outline-none border-none text-primary ring-1  ring-primary">
        Appointment
      </button>
    </div>
  );
}

export default MenuIcons;
