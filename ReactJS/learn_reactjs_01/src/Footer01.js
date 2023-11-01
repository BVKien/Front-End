import React from 'react'

const Footer01 = ({ length }) => {
    return (
        <footer>
            <p>{length} list {length === 1 ? 'item' : 'items'}</p>
        </footer>
    )
}

export default Footer01

/*
// backup
const Footer01 = () => {
    const today = new Date();
    return (
        <footer>
            <p>Copyright &copy; {today.getFullYear()}</p>
        </footer>
    )
}
*/