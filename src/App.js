import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Users from "./components/Users/Users";
import UserInfo from "./components/UserInfo/UserInfo"

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Router>
        <Navbar />
        <div className="main-page">
          <Routes>
            <Route exact path="/userInfo/:id" element={<UserInfo />} />
            <Route path="/users" element={<Users />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
