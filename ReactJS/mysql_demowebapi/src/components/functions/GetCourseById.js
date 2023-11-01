import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const GetCourseById = () => {
    const [courseId, setCourseId] = useState('')
    const [course, setCourse] = useState(null)

    const handleInputChange = (event) => {
        setCourseId(event.target.value)
    }

    const fetchCourseById = async () => {
        try {
            const response = await axios.get(`https://localhost:7041/api/Course/${courseId}`)
            setCourse(response.data)
        } catch (error) {
            throw new Error(error)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetchCourseById()
    }

    return (
        <div>
            <ul>
                <li>GetCourseById</li>
            </ul>
            <form onSubmit={handleSubmit}>
                <label htmlFor="courseIdInput">Enter course Id: </label>
                <input
                    type='number'
                    id='courseIdInput'
                    value={courseId}
                    onChange={handleInputChange}
                />
                <button type='submit'>Fetch course</button>
            </form>

            {course ? (<div>
                <p>Course Id: {course.courseId}</p>
                <p>courseName: {course.courseName}</p>
                <p>description: {course.description}</p>
                <p>courseInfo: {course.courseInfo}</p>
                <p>image: {course.image}</p>
                <p>videoIntro: {course.videoIntro}</p>
                <p>fee: {course.fee}</p>
                <p>status: {course.status}</p>
                <p>categoryCategoryId: {course.categoryCategoryId}</p>
                <p>userUserId: {course.userUserId}</p>
            </div>) : (<p>
                Enter valid course Id and click 'fetch course' to see detail
            </p>)}
        </div>
    )
}

export default GetCourseById