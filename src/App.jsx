import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Sidebar from "./components/Sidebar";
import TransactionsPage from "./components/TransactionsPage";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [currentRole, setCurrentRole] = useState("Admin");
  return (
    <>
      <div className="app-wrapper">
        <Sidebar />
        {/* <Header /> */}
        <main className="content-area">
          <Header currentRole={currentRole} setCurrentRole={setCurrentRole} />
          <Routes>
           
            <Route path="/" element={<HomePage currentRole={currentRole}/>} />

           
            <Route path="/transactions" element={<TransactionsPage currentRole={currentRole} />} />

           
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
