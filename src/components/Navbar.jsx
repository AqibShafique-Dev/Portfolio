import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-4xl">
        <a   href="https://www.linkedin.com/in/aqib-shafique-b31bba229/"><FaLinkedin /></a>
        <FaGithub />
      </div>
    </nav>
  );
};

export default Navbar;
