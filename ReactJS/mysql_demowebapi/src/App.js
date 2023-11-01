// libs
import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// layouts
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Nav from "./components/layouts/Nav";
import Sidebar from "./components/layouts/Sidebar";
import Content from "./components/layouts/Content";

// functions components
import GetAllCourses from "./components/functions/GetAllCourses";
import GetCourseById from "./components/functions/GetCourseById";
import AddCourse from "./components/functions/AddCourse";
import UpdateCourse from "./components/functions/UpdateCourse";
import DeleteCourse from "./components/functions/DeleteCourse";
import DeleteCourseUsingAxios from "./components/functions/DeleteCourseUsingAxios";
import Button from "./components/button/Button";

function App() {
  return (
    <Router>
      <hr />
      <ul>
        {/* css inline */}
        {/* <p style={{ color: 'red' }}>Tôi viết giao diện API của tôi</p> */}
        <p>Tôi viết giao diện API của tôi</p>
      </ul>

      <ul>
        <li>
          <a href="https://react.dev/">React</a>
        </li>
        <li>
          <Link to="/GetAllCourses">Get All Courses</Link>
        </li>
        <li>
          <Link to="/GetCourseById">Get Course By Id</Link>
        </li>
        <li>
          <Link to="AddCourse">Add Course</Link>
        </li>
        <li>
          <Link to="/UpdateCourse">Update Course By Id</Link>
        </li>
        <li>
          <Link to="/DeleteCourse">Delete Course</Link>
        </li>
        <li>
          <Link to="/DeleteCourseUsingAxios">Delete Course - Axios</Link>
        </li>
      </ul>

      <Button />
      <Button primary />
      <Button primary disabled />
      <hr />

      <Header />
      <Nav />
      <Sidebar />
      <Content />
      <Routes>
        <Route path="/GetAllCourses" element={<GetAllCourses />} />
        <Route path="GetCourseById" element={<GetCourseById />} />
        <Route path="/AddCourse" element={<AddCourse />} />
        <Route path="/UpdateCourse" element={<UpdateCourse />} />
        <Route path="/DeleteCourse" element={<DeleteCourse />} />
        <Route
          path="/DeleteCourseUsingAxios"
          element={<DeleteCourseUsingAxios />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
