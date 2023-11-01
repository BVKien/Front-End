import React from 'react'
import { useState, useEffect } from 'react'
import styles from './GetAllCourses.module.css'

console.log(styles)

const GetAllCourses = () => {
    // khai bao constructor getter setter data bang useState
    // getter, setter
    const [data, setData] = useState([]) // ở đây course có nhiều object, nên để mảng

    // useEffect(() => {}, [])
    useEffect(() => {
        fetchDataFromApi()
    }, [])

    // hàm fetch - tìm nạp data từ api backend đến front end
    const fetchDataFromApi = async () => {
        try {
            // khởi tạo 1 constant: hằng số response: phản hồi để fetch api
            const response = await fetch('https://localhost:7041/api/Course')
            // check response để báo lỗi 
            if (!response.ok) {
                throw new Error('network is not ok')
            }
            // khởi tạo 1 responseData để lấy data json 
            const responseData = await response.json()
            // setData
            setData(responseData)
        } catch (error) {
            throw new Error('Error')
        }
    }

    return (
        <div>
            <ul>
                <hr />
                <li><a className={styles.heading}>GetAllCourses</a></li>
            </ul>

            <ul>
                {data.map(item => (
                    <li key={item.courseId}>
                        <strong>Course Id: {item.courseId}</strong>
                        <p>courseName: {item.courseName}</p>
                        <p>description: {item.description}</p>
                        <p>courseInfo: {item.courseInfo}</p>
                        <p>image: {item.image}</p>
                        <p>videoIntro: {item.videoIntro}</p>
                        <p>fee: {item.fee}</p>
                        <p>status: {item.status}</p>
                        <p>categoryCategoryId: {item.categoryCategoryId}</p>
                        <p>userUserId: {item.userUserId}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default GetAllCourses