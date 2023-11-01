import React from 'react'
// const Header = (props) // first way {props.title}
const Header = ({ title }) => {
    /*
    const headerStyle = {
        backgroundColor: 'blue',
        color: '#fff'
    }
    */
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Default Title'
}

export default Header
