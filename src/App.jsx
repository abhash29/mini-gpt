import './App.css';

import Main from "./Components/Main/Main";
import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
