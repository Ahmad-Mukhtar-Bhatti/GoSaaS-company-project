import { BiSolidUserCircle } from "react-icons/bi";
import MyImage from "../images/gosaas-transparent.png";
import "./Navbar.css";
function Navbar() {
  return (
    <div>
      {" "}
      <nav className="nav-bar">
        {" "}
        <img className="youimage" src={MyImage} />{" "}
        <BiSolidUserCircle className="user-icon" />{" "}
      </nav>{" "}
    </div>
  );
}
export default Navbar;
