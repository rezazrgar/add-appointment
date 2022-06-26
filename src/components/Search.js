import React, { useState } from "react";
import "./search.css";
import { BiSearch, BiArrowToBottom, BiCheck } from "react-icons/bi";

const DropDown = ({
  toggleSort,
  sortBy,
  onSortByChange,
  orderBy,
  onOrderByChange,
}) => {
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
        <div
          className="menu-item"
          role="menuitem"
          onClick={() => onSortByChange("petName")}
        >
          <span> Pet Name </span> {sortBy === "petName" && <BiCheck />}
        </div>
        <div
          className="menu-item"
          role="menuitem"
          onClick={() => onSortByChange("ownerName")}
        >
          <span> Owner Name </span> {sortBy === "ownerName" && <BiCheck />}
        </div>
        <div
          className="menu-item"
          role="menuitem"
          onClick={() => onSortByChange("aptDate")}
        >
          <span> Date </span> {sortBy === "aptDate" && <BiCheck />}
        </div>
        <div
          className="menu-item border"
          role="menuitem"
          onClick={() => onOrderByChange("asc")}
        >
          <span> Acs </span> {orderBy === "asc" && <BiCheck />}
        </div>
        <div
          className="menu-item"
          role="menuitem"
          onClick={() => onOrderByChange("desc")}
        >
          <span> Desc </span> {orderBy === "desc" && <BiCheck />}
        </div>
      </div>
    </div>
  );
};

const Search = ({
  query,
  onQueryChange,
  sortBy,
  onSortByChange,
  orderBy,
  onOrderByChange,
}) => {
  let [toggleSort, setToggleSort] = useState(false);
  return (
    <div className="search">
      <div className="search-icon-div">
        <BiSearch />
      </div>
      <input
        type="text"
        name="query"
        id="query"
        value={query}
        onChange={(event) => {
          onQueryChange(event.target.value);
        }}
        className="search-input-div"
        placeholder="Search"
      ></input>
      <button
        className="search-button-div"
        aria-haspopup="true"
        aria-expanded="true"
        id="options-menu"
        onClick={() => {
          setToggleSort(!toggleSort);
        }}
      >
        <span>Sort By</span>
        <BiArrowToBottom />
      </button>
      <DropDown
        toggleSort={toggleSort}
        sortBy={sortBy}
        onSortByChange={(mySort) => onSortByChange(mySort)}
        orderBy={orderBy}
        onOrderByChange={(myOrder) => onOrderByChange(myOrder)}
      />
    </div>
  );
};

export default Search;
