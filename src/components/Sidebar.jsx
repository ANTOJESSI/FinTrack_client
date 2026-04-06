import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isOpen, setIsOpen }) => {


  return (
    /* Dynamic classes: 'open' for desktop logic, 'mobile-visible' for mobile logic */
    <aside className={`sidebar ${isOpen ? "open mobile-visible" : "collapsed"}`}>
      <div className="sidebar-header">
        {isOpen && <div className="logo">FinTrack</div>}
        
        {/* Toggle button (Desktop) / Close button (Mobile) */}
        <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "×" : "☰"}
        </button>
      </div>

      <nav className="nav-menu">
        <NavLink to="/" className="nav-item" onClick={() => window.innerWidth < 768 && setIsOpen(false)}>
          <span className="icon">🏠</span>
          {isOpen && <span className="label">Dashboard</span>}
        </NavLink>

        <NavLink to="/transactions" className="nav-item" onClick={() => window.innerWidth < 768 && setIsOpen(false)}>
          <span className="icon">💸</span>
          {isOpen && <span className="label">Transactions</span>}
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;