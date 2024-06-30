import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
//import "./App.css";
import SideBar from "./components/SideBar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Chapter1 from "./chapters/Chapter1";

function App() {
  return (
    <>
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" Component={Chapter1}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
