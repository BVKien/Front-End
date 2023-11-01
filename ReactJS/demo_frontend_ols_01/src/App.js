import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Thêm Link từ react-router-dom
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import DefaultLayout from "./layouts/DefaultLayout";
import TestAPI from "./TestAPI";
import TestGetById from "./TestGetById";
import TestPost from "./TestPost";
import TestPut from "./TestPut";
import TestDelete from "./TestDelete";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Sidebar />
        <Content />
        <Footer />
        <DefaultLayout />

        <ul>
          <li>
            <Link to="/test-api">Test API</Link>
          </li>
          <li>
            <Link to="/test-getbyid">Test Get By ID</Link>
          </li>
          <li>
            <Link to="/test-post">Test Post</Link>
          </li>
          <li>
            <Link to="/test-put">Test Put</Link>
          </li>
          <li>
            <Link to="/test-delete">Test Delete</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/test-api" element={<TestAPI />} />
          <Route path="/test-getbyid" element={<TestGetById />} />
          <Route path="/test-post" element={<TestPost />} />
          <Route path="/test-put" element={<TestPut />} />
          <Route path="/test-delete" element={<TestDelete />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;