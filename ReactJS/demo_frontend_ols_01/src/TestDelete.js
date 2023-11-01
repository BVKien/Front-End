import React, { useState } from 'react';

const TestDelete = () => {
    const [courseIdToDelete, setCourseIdToDelete] = useState(''); // Khởi tạo giá trị rỗng

    const handleDelete = async () => {
        try {
            const response = await fetch(`https://localhost:7138/api/Course/${courseIdToDelete}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 204) {
                // Xóa thành công
                alert('Xóa thành công');
            } else if (response.status === 404) {
                // Không tìm thấy khóa học
                alert('Không tìm thấy khóa học');
            } else {
                // Xử lý các trường hợp lỗi khác
                alert('Đã xảy ra lỗi khi xóa khóa học');
            }
        } catch (error) {
            console.error('Lỗi kết nối:', error);
            alert('Đã xảy ra lỗi khi kết nối đến máy chủ');
        }
    };

    return (
        <div>
            <strong>--------Delete</strong>
            <div>
                <label>Id to delete:</label>
                <input
                    type="number"
                    value={courseIdToDelete}
                    onChange={(e) => setCourseIdToDelete(e.target.value)}
                />
            </div>
            <button onClick={handleDelete}>delete</button>
        </div>
    );
};

export default TestDelete;