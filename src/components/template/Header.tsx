import { NavLink } from "react-router-dom";
import NavBar from "../organism/NavBar";
import logo from "../../assets/LOGO.svg";

const Header = () => {
  return (
    <header className="md:static h-full w-full flex flex-row justify-between items-center bg-gray-950">
      <NavLink to="/" className="flex items-center">
        <img className="w-44 md:w-20 p-4" src={logo} alt="logo" />
      </NavLink>
      <NavBar />
    </header>
  );
};

export default Header;
