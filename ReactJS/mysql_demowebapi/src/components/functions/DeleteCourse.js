import React from 'react'
import { useState } from 'react'

const DeleteCourse = () => {
    const [courseId, setCourseId] = useState('')

    const handleDelete = async () => {
        try {
            const response = await fetch(`https://localhost:7041/api/Course/${courseId}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })

            if (response.status === 204) {
                //alert('Delete success')
                console.log('Delete success')
            } else if (response.status === 404) {
                //alert('not found course')
                console.log('not found course')
            } else {
                //alert('error')
                console.log('error')
            }
        } catch (error) {
            console.error('Lỗi kết nối: ', error)
            //alert('Đẫ xảy ra lỗi khi kết nối đến máy chủ')
            console.log('Đẫ xảy ra lỗi khi kết nối đến máy chủ')
        }
    }

    return (
        <div>
            <ul>
                <li>Delete Course</li>
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

export default DeleteCourse