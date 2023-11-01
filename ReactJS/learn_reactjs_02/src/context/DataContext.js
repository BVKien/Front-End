import React from "react";
import { createContext, useState, useEffect } from "react";
import api from '../api/posts'
import { format } from 'date-fns';
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({})

export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')
    // results is an array
    const [searchResults, setSearchResults] = useState([])

    const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts')

    useEffect(() => {
        setPosts(data)
    }, [data])

    /*
    // show data
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await api.get('/posts')
          setPosts(response.data)
        } catch (error) {
          if (error.response) {
            // not in the 200 response range 
            console.log(error.response.data)
            console.log(error.response.message)
            console.log(error.response.status)
            console.log(error.response.headers)
          } else {
            console.log(`Error: ${error.message}`)
          }
        }
      }
  
      // fetch 
      fetchPosts()
    }, [])
  */

    useEffect(() => {
        // search
        const filteredResults = posts.filter(post =>
            (post.body).toLowerCase().includes(search.toLowerCase())
            || (post.title).toLowerCase().includes(search.toLowerCase()))

        setSearchResults(filteredResults.reverse())
    }, [posts, search])

    /*
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
    */

    return (
        <DataContext.Provider value={{
            search, setSearch,
            searchResults, fetchError, isLoading,
            posts, setPosts
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext