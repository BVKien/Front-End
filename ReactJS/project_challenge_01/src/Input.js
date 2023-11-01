import React from 'react'
import colorNames from 'colornames'

const Input = ({
    colorValue, setColorValue, setHexValue, isDarkTest, setIsDarkTest
}) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Add Color Name:</label>
            <input
                autoFocus
                type="text"
                placeholder='Add color name'
                required
                value={colorValue}
                onChange={(e) => {
                    setColorValue(e.target.value)
                    setHexValue(colorNames(e.target.value))
                }}
            />
            <button
                type='button'
                onClick={() => setIsDarkTest(!isDarkTest)}
            >
                Toggle Text Color
            </button>
        </form>
    )
}

export default Input

// submit by default - reload the page
//preventDefault()