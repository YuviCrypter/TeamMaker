import "../styles.css";
import { useState } from "react";

import { CgProfile } from "react-icons/cg";
import { BsBookmarkStarFill } from "react-icons/bs";

export default function Navbar() {
  const [IsOpen, SetIsOpen] = useState("navbar-c");
  const MenuToggle = () => {
    if (IsOpen === "navbar-c") {
      SetIsOpen("navbar-o");
    } else if (IsOpen === "navbar-o") {
      SetIsOpen("navbar-c");
    }
  };
  return (
    <>
      <div className="navb"></div>
      <div className={IsOpen}>
        <div className="menu-toggle" onClick={MenuToggle}></div>
        <ul className="list">
          {/* Add new options from this region */}
          <li className="list-item">
            <a href="#">
              <span className="icon">
                <CgProfile />
              </span>
              <span className="text">Profile</span>
            </a>
          </li>
          <li className="list-item">
            <a href="#" onclick="{MenuToggle}">
              <span className="icon">
                <BsBookmarkStarFill />
              </span>
              <span className="text">Bookmarks</span>
            </a>
          </li>
          {/* Just Change the icon and text */}
        </ul>
      </div>
    </>
  );
}
