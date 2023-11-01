import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const DeleteCourseUsingAxios = () => {
    const [courseId, setCourseId] = useState('')

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`https://localhost:7041/api/Course/${courseId}`,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            if (response.status === 204) {
                console.log('Delete success')
            } else if (response.status === 404) {
                console.log('not found course')
            } else {
                console.log('error')
            }
        } catch (error) {
            console.error(error)
            console.log('An error occurred while connecting to the server')
        }
    }

    return (
        <div>
            <ul>
                <li>DeleteCourseUsingAxios</li>
            </ul>
            <label>Enter courseId to delete: </label>
            <input
                type='number'
                value={courseId}
                onChange={(e) => setCourseId(e.target.value)}
            />
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default DeleteCourseUsingAxios