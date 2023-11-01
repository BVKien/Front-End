import React from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { useContext } from 'react'
import api from './api/posts'
import DataContext from './context/DataContext'

const PostPage = () => {
    const { posts, setPosts } = useContext(DataContext)
    const { id } = useParams()
    //const history = useHistory()
    const post = posts.find(post => (post.id).toString() === id)

    const handleDelete = async (id) => {
        try {
            //await api.delete(`/posts/${id}`)
            // const postList = posts.filter(post => post.id !== id)
            // setPosts(postList)
            // history.push('/') 
        } catch (error) {
            console.log(`Error: ${error.message}`)
        }
    }


    return (
        <main>
            <article>
                {post &&
                    <>
                        <h2>{post.title}</h2>
                        <p>{post.datetime}</p>
                        <p>{post.body}</p>
                        <Link to={`/edit/${post.id}`}>
                            <button className='editButton'>Edit post</button>
                        </Link>
                        <button className='deleteButton' onClick={() => handleDelete(post.id)}>
                            Delete Post
                        </button>
                    </>
                }
                {!post &&
                    <>
                        <h2>Post not found</h2>
                        <p>Well, that's disappointing</p>
                        <p>
                            <Link to='/'>Visit our Homepage</Link>
                        </p>
                    </>
                }
            </article>
        </main>
    )
}

export default PostPage