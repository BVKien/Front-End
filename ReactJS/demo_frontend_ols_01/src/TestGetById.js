import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";

const TestGetById = () => {
    const [courseId, setCourseId] = useState(''); // State để lưu trữ Id nhập từ người dùng
    const [course, setCourse] = useState(null);

    const handleInputChange = (event) => {
        setCourseId(event.target.value);
    };

    const fetchCourseById = async () => {
        try {
            const response = await axios.get(`https://localhost:7138/api/Course/${courseId}`);
            setCourse(response.data);
        } catch (error) {
            console.error('Error fetching course:', error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Ngăn chặn việc tải lại trang khi ấn Enter

        // Gọi hàm fetchCourseById để tìm khóa học theo ID
        fetchCourseById();
    };

    return (
        <div>
            <strong>----------Course Details</strong>
            <form onSubmit={handleSubmit}>
                <label htmlFor="courseIdInput">Enter Course ID: </label>
                <input
                    type="number"
                    id="courseIdInput"
                    value={courseId}
                    onChange={handleInputChange}
                />
                <button type="submit">Fetch Course</button>
            </form>
            {course ? (
                <div>
                    <p>Course ID: {course.id}</p>
                    <p>Course Name: {course.name}</p>
                    <p>Category: {course.category}</p>
                </div>
            ) : (
                <p>Enter a valid course ID and click "Fetch Course" to see details.</p>
            )}
        </div>
    );
};

export default TestGetById;