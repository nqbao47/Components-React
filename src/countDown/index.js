import { useEffect, useState } from "react"

function CountDown() {
    const [countDown, setCountdown] = useState(50)

    useEffect(() => {
        const timerId = setInterval(() => {
            setCountdown(prev => prev -1)
        }, 1000)

        return () => {clearInterval(timerId)}
    })

    return (
        <div id="app" >
            <h1>{countDown}</h1>
        </div>
    )
}

export default CountDown