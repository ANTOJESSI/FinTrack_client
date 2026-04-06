import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // Sidebar is open by default

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    /* We add a dynamic class "collapsed" when isOpen is false */
    <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
      <div className="sidebar-header">
        {isOpen && <div className="logo">FinTrack</div>}
        <button className="toggle-btn" onClick={toggleSidebar}>
          {/* These are the "three lines" (Hamburger icon) */}☰
        </button>
      </div>

      <nav className="nav-menu">
        <NavLink to="/" className="nav-item">
          <span className="icon">🏠</span>
          {/* This text is conditionally rendered - it vanishes when collapsed */}
          {isOpen && <span className="label">Dashboard</span>}
        </NavLink>

        <NavLink to="/transactions" className="nav-item">
          <span className="icon">💸</span>
          {isOpen && <span className="label">Transactions</span>}
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
