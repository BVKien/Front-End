import React, { useState } from 'react';
import axios from 'axios';

const TestPost = () => {
    const [course, setCourse] = useState({
        id: '',
        name: '',
        category: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCourse({
            ...course,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Gửi dữ liệu course lên API
            await axios.post('https://localhost:7138/api/Course', course);
            console.log('Course added successfully:', course);
            // Reset dữ liệu sau khi gửi thành công
            setCourse({ id: '', name: '', category: '' });
        } catch (error) {
            console.error('Error adding course:', error);
        }
    };

    return (
        <div>
            <strong>--------Add Course</strong>
            <form onSubmit={handleSubmit}>
                <label htmlFor="idInput">ID: </label>
                <input
                    type="text"
                    id="idInput"
                    name="id"
                    value={course.id}
                    onChange={handleInputChange}
                />
                <br />
                <label htmlFor="nameInput">Name: </label>
                <input
                    type="text"
                    id="nameInput"
                    name="name"
                    value={course.name}
                    onChange={handleInputChange}
                />
                <br />
                <label htmlFor="categoryInput">Category: </label>
                <input
                    type="text"
                    id="categoryInput"
                    name="category"
                    value={course.category}
                    onChange={handleInputChange}
                />
                <br />
                <button type="submit">Add Course</button>
            </form>
        </div>
    );
};

export default TestPost;