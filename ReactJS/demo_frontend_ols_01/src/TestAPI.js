import React from 'react';
import { useState, useEffect } from 'react';

const TestAPI = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchDataFromApi();
    }, []);

    const fetchDataFromApi = async () => {
        try {
            //const response = await fetch('https://localhost:7054/GetAllCourses'); // học lại javascript
            const response = await fetch('https://localhost:7138/api/Course'); // học lại javascript
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = await response.json();
            setData(responseData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <strong>------get all courses</strong>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        <p>Course ID: {item.id} </p>
                        <p>Name: {item.name}</p>
                        <p>Category: {item.category}</p>
                        <hr />
                    </li>
                ))}
            </ul>
        </div >
    );
}

export default TestAPI;

/*
return (
    <div>
        <p>--------------------------------------------------</p>
        <p>Data from API: https://localhost:7054/GetAllCourses</p>
        <>.Net Core 6.0 - F8 - OLS</>
        <h1>get all courses</h1>
        <ul>
            {data.map(item => (
                <li key={item.courseId}>
                    <strong>Course ID:</strong> {item.courseId}<br />
                    <strong>Name:</strong> {item.name}<br />
                    <strong>Image:</strong> {item.image}<br />
                    <strong>Course Info:</strong> {item.courseInfo}<br />
                    <strong>Description:</strong> {item.description}<br />
                    <strong>Status:</strong> {item.status}<br />
                    <strong>User ID:</strong> {item.userUserId}<br />
                    <strong>Category ID:</strong> {item.categoryCategoryId}<br />
                    <strong>Fee Status:</strong> {item.feeStatus}<br />
                    <strong>Video Intro:</strong> {item.videoIntro}<br />
                    <strong>Category:</strong> {item.categoryCategoryId}<br />
                    <strong>User:</strong> {item.userUserId}<br />
                    <hr />
                </li>
            ))}
        </ul>
        <p>--------------------------------------------------</p>
    </div >
);
*/