import React, { useState } from 'react';
import axios from 'axios';

const TestPut = () => {
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

    const handleUpdate = async (event) => {
        event.preventDefault();

        try {
            // Gửi dữ liệu cập nhật thông tin khóa học (PUT) lên API
            await axios.put(`https://localhost:7138/api/Course/${course.id}`, course);
            console.log('Course updated successfully:', course);
            // Reset dữ liệu sau khi cập nhật thành công
            setCourse({ id: '', name: '', category: '' });
        } catch (error) {
            console.error('Error updating course:', error);
        }
    };

    return (
        <div>
            <strong>----------Update Course</strong>
            <form onSubmit={handleUpdate}>
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
                <button type="submit">Update Course</button>
            </form>
        </div>
    );
};

export default TestPut;