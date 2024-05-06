import DesktopMenu from "./DesktopMenu";
import Logo from "./Logo";
import MenuIcons from "./MenuIcons";

function Header() {
  return (
    <header>
      <nav className="container flex justify-between items-center py-3">
        {/* logo */}
        <Logo></Logo>

        {/* desktop menu */}
        <DesktopMenu></DesktopMenu>

        {/* icons */}
        <MenuIcons></MenuIcons>
      </nav>
    </header>
  );
}

export default Header;
