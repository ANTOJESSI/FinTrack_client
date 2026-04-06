import React, { useState } from "react";
import "./Header.css";

const Header = ({ currentRole, setCurrentRole }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const roles = ["Admin", "Editor", "Viewer"];

  return (
    <header className="main-header">
      <div className="header-left">
        <h2 className="brand-title">Zorvyn - FinTrack</h2>
      </div>

      <div className="header-right">
        <div
          className="user-profile"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <div className="user-info">
            <span className="user-name">Archana</span>
            {/* Uses the prop from App.jsx */}
            <span className="user-role">{currentRole}</span>
          </div>
          <div className="avatar">👤</div>

          {showDropdown && (
            <ul className="role-dropdown">
              {roles.map((r) => (
                <li 
                  key={r} 
                  onClick={() => {
                    setCurrentRole(r); // Updates App.jsx state
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