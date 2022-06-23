import React from "react";
import "./search.css";
import { BiSearch, BiArrowToBottom, BiCheck } from "react-icons/bi";

const DropDown = () => {
  return (
    <div className="drop-down">
      <div
        className="menu"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div className="menu-item" role="menuitem">
          <span> Pet Name </span> <BiCheck />
        </div>
        <div className="menu-item" role="menuitem">
          <span> Owner Name </span> <BiCheck />
        </div>
        <div className="menu-item" role="menuitem">
          <span> Date </span> <BiCheck />
        </div>
        <div className="menu-item border" role="menuitem">
          <span> Acs </span> <BiCheck />
        </div>
        <div className="menu-item" role="menuitem">
          <span> Desc </span> <BiCheck />
        </div>
      </div>
    </div>
  );
};

const Search = () => {
  return (
    <div className="search">
      <div className="search-icon-div">
        <BiSearch />
      </div>
      <input className="search-input-div" placeholder="Search"></input>
      <button className="search-button-div">
        <span>Sort By</span>
        <BiArrowToBottom />
      </button>
      <DropDown />
    </div>
  );
};

export default Search;
