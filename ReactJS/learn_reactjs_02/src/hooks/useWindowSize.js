import React, { useEffect, useState } from 'react'

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({

    })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                with: window.innerWidth,
                height: window.innerHeight
            })
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        const cleanUp = () => {
            console.log('run if a useEffect dep change')
            window.removeEventListener('resize', handleResize)
        }

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowSize
}

export default useWindowSize