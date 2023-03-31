import { useEffect, useState } from "react"


function Resize() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() =>{
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
    })

    return(
        <div style={{ }}>
            <h1>Please drag your browser to see your Width changes</h1>
            <h2
                style={{
                    color: 'red'
                }}
            >{width}</h2>
        </div>
    )
}

export default Resize