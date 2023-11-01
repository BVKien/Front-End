import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const AddCourse = () => {
    const [course, setCourse] = useState({
        courseId: '',
        courseName: '',
        description: '',
        courseInfo: '',
        image: '',
        videoIntro: '',
        fee: '',
        status: '',
        categoryCategoryId: '',
        userUserId: ''
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCourse({
            ...course,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            await axios.post('https://localhost:7041/api/Course', course)
            console.log('Course added successfully', course)
            setCourse({
                courseId: '',
                courseName: '',
                description: '',
                courseInfo: '',
                image: '',
                videoIntro: '',
                fee: '',
                status: '',
                categoryCategoryId: '',
                userUserId: ''
            })
        } catch (error) {
            console.error('Error adding course:', error);
        }
    }

    return (
        <div>
            <ul>
                <li>AddCourse</li>
            </ul>
            <form onSubmit={handleSubmit}>

                {/* courseId */}
                <label htmlFor='courseIdInput'>Course Id: </label>
                <input
                    type='number'
                    id='courseIdInput'
                    name='courseId'
                    value={course.courseId}
                    onChange={handleInputChange}
                />
                <br />

                {/* courseName */}
                <label htmlFor='courseNameInput'>Course Name: </label>
                <input
                    type='text'
                    id='courseNameInput'
                    name='courseName'
                    value={course.courseName}
                    onChange={handleInputChange}
                />
                <br />

                {/* description */}
                <label htmlFor='descriptionInput'>Description: </label>
                <input
                    type='text'
                    id='descriptionInput'
                    name='description'
                    value={course.description}
                    onChange={handleInputChange}
                />
                <br />

                {/* courseInfo */}
                <label htmlFor='courseInfoInput'>CourseInfo: </label>
                <input
                    type='text'
                    id='courseInfoInput'
                    name='courseInfo'
                    value={course.courseInfo}
                    onChange={handleInputChange}
                />
                <br />

                {/* image */}
                <label htmlFor='imageInput'>image: </label>
                <input
                    type='text'
                    id='imageInput'
                    name='image'
                    value={course.image}
                    onChange={handleInputChange}
                />
                <br />

                {/* videoIntro */}
                <label htmlFor='videoIntroInput'>videoIntro: </label>
                <input
                    type='text'
                    id='videoIntroInput'
                    name='videoIntro'
                    value={course.videoIntro}
                    onChange={handleInputChange}
                />
                <br />

                {/* fee */}
                <label htmlFor='feeInput'>fee: </label>
                <input
                    type='text'
                    id='feeInput'
                    name='fee'
                    value={course.fee}
                    onChange={handleInputChange}
                />
                <br />

                {/* status */}
                <label htmlFor='statusInput'>status: </label>
                <input
                    type='number'
                    id='statusInput'
                    name='status'
                    value={course.status}
                    onChange={handleInputChange}
                />
                <br />

                {/* categoryId */}
                <label htmlFor='categoryIdInput'>Category Id: </label>
                <input
                    type='number'
                    id='categoryIdInput'
                    name='categoryCategoryId'
                    value={course.categoryCategoryId}
                    onChange={handleInputChange}
                />
                <br />

                {/* userId */}
                <label htmlFor='userIdInput'>User Id: </label>
                <input
                    type='number'
                    id='userIdInput'
                    name='userUserId'
                    value={course.userUserId}
                    onChange={handleInputChange}
                />
                <br />

                <button type='submit'>Add Course</button>
            </form>
        </div>
    )
}

export default AddCourse