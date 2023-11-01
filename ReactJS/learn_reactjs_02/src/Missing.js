import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
    return (
        <main className='Mising'>
            <h1>Page not found</h1>
            <p>That's dispiting</p>
            <p>
                <Link to='/'>Back to homepage</Link>
            </p>
        </main>
    )
}

export default Missing