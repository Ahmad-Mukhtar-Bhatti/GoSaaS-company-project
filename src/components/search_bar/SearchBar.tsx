import React, { useState } from "react";
import "./SearchBar.css";
import { IoMdAddCircle } from "react-icons/io";

interface Props {
  title: string;
}

const SearchBar = (props: Props) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
    setIsSearchActive(false);
  };

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
    <div>
      <nav className="SB_nav">
        <div className={`menu-icon ${isMenuActive ? "hide" : ""}`}>
          <span className="fas fa-bars" onClick={toggleMenu}></span>
        </div>

        <div className="logo">{props.title}</div>

        {/* <div className={`nav-items ${isMenuActive ? "active" : ""}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </div> */}

        <div className={`search-icon ${isSearchActive ? "hide" : ""}`}>
          <span className="fas fa-search" onClick={toggleSearch}></span>
        </div>

        <div className={`cancel-icon ${isSearchActive ? "show" : ""}`}>
          <span className="fas fa-times" onClick={closeMenu}></span>
        </div>

        <form
          className={`search-form ${isSearchActive ? "active" : ""}`}
          action="#"
        >
          <input
            type="search"
            className="search-data"
            placeholder="Search"
            required
          />
          <button type="submit" className="fas fa-search"></button>
        </form>
        <IoMdAddCircle className="add-icon" />
      </nav>
    </div>
  );
};

export default SearchBar;
