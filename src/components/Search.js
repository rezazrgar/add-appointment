import React, { useState } from "react";
import "./search.css";
import { BiSearch, BiArrowToBottom, BiCheck } from "react-icons/bi";

const DropDown = ({ toggleSort }) => {
  if (!toggleSort) {
    return null;
  }
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
  let [toggleSort, setToggleSort] = useState(false);
  return (
    <div className="search">
      <div className="search-icon-div">
        <BiSearch />
      </div>
      <input className="search-input-div" placeholder="Search"></input>
      <button
        className="search-button-div"
        aria-haspopup="true"
        aria-expanded="true"
        onClick={() => {
          setToggleSort(!toggleSort);
        }}
      >
        <span>Sort By</span>
        <BiArrowToBottom />
      </button>
      <DropDown toggleSort={toggleSort} />
    </div>
  );
};

export default Search;
