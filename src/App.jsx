import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Sidebar from "./components/Sidebar";
import TransactionsPage from "./components/TransactionsPage";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [currentRole, setCurrentRole] = useState("Admin");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile toggle state
  return (
    <>
      <div className={`app-wrapper ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        {/* <Header /> */}
        <main className="content-area">
          <Header
            currentRole={currentRole}
            setCurrentRole={setCurrentRole}
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          />
          <Routes>
            <Route path="/" element={<HomePage currentRole={currentRole} />} />

            <Route
              path="/transactions"
              element={<TransactionsPage currentRole={currentRole} />}
            />
          </Routes>

          {/* Overlay to close sidebar when clicking outside on mobile */}
          {isSidebarOpen && (
            <div
              className="sidebar-overlay"
              onClick={() => setIsSidebarOpen(false)}
            ></div>
          )}
        </main>
      </div>
    </>
  );
}

export default App;
