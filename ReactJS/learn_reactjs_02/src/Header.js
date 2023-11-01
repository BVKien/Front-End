import React from 'react'
import { FaLaptop, FaTableAlt, FaMobileAlt } from 'react-icons/fa'
import { useContext } from 'react'
import DataContext from './context/DataContext'
import useWindowSize from './hooks/useWindowSize'

const Header = ({ title }) => {
    const { width } = useWindowSize()

    return (
        <header>
            <h1>{title}</h1>
            {width < 768 ? <FaMobileAlt /> : width < 992 ? <FaMobileAlt /> : <FaLaptop />}
        </header>
    )
}

export default Header