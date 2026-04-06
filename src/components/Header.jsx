import React, { useState } from "react";
import "./Header.css";

const Header = ({ currentRole, setCurrentRole, toggleSidebar }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const roles = ["Admin", "Editor", "Viewer"];

  return (
    <header className="main-header">
      <div className="header-left">
  
        <button className="hamburger-btn" onClick={toggleSidebar}>
          ☰
        </button>
        <h2 className="brand-title">Zorvyn - FinTrack</h2>
      </div>

      <div className="header-right">
        <div
          className="user-profile"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <div className="user-info">
            <span className="user-name">Archana</span>
            <span className="user-role">{currentRole}</span>
          </div>
          <div className="avatar">👤</div>

          {showDropdown && (
            <ul className="role-dropdown">
              {roles.map((r) => (
                <li 
                  key={r} 
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents closing the dropdown too early
                    setCurrentRole(r);
                    setShowDropdown(false);
                  }}
                >
                  {r} {currentRole === r && "✓"}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;