import React, { useState } from "react";

import { Link } from "react-router-dom";

const Menu = ({uname}) => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  


  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";


  return (
    <div className="menu-container">
      
      <div className="menus">

        <hr />
        <div className="profile" onClick={handleProfileClick}>
        
          <div className="avatar">{uname}
          
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Menu;
