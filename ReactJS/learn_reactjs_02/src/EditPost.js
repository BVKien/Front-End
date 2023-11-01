import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import DataContext from './context/DataContext'
import api from './api/posts'
import { format } from 'date-fns';

const EditPost = () => {
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    const { posts, setPosts } = useContext(DataContext)
    //const history = useHistory()
    const { id } = useParams()
    const post = posts.find(post => (post.id).toString() === id)

    useEffect(() => {
        if (post) {
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    }, [post, setEditTitle, setEditBody])

    const handleEdit = async (id) => {
        const datetime = format(new Date(), 'MMMM dd, yyyy pp'); // pp for time
        const updatePost = { id, title: editTitle, datetime, body: editBody }
        try {
            const response = await api.put(`/posts/${id}`, updatePost)
            setPosts(posts.map(post => post.id === id ? { ...response.data } : post))
            setEditTitle('')
            setEditBody('')
            //history.push('')
        } catch (error) {
            console.log(`Error: ${error.message}`)
        }
    }

    return (
        <main>
            {editTitle &&
                <>
                    <h2>Edit Post</h2>
                    <form
                        className='newPostForm'
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <label htmlFor="postTitle">Title:</label>
                        <input
                            id='postTitle'
                            type="text"
                            required
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                        />
                        <label htmlFor="postBody">Post:</label>
                        <textarea
                            id="postBody"
                            required
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                        />
                        <button type='submit' onClick={() => handleEdit(post.id)} >Submit</button>
                    </form>
                </>
            }
            {!editTitle &&
                <>
                    <h2>Post not found</h2>
                    <p>Well that's disappointing</p>
                    <p>
                        <Link to='/'>Back to homepage</Link>
                    </p>
                </>

            }
        </main>
    )
}

export default EditPost