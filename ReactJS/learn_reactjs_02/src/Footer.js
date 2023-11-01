import { getYear } from 'date-fns'
import React from 'react'

const Footer = () => {
    const today = new Date()
    return (
        // classname for css
        <footer className='Footer'>
            <p>Copyright &copy; {today.getFullYear()}</p>
        </footer>
    )
}

export default Footer