import { useEffect, useState } from "react"


export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return ()=>{
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    return windowSize;
}