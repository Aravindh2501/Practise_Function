import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(24)

    const handleInc = () => {
        setCount(count + 1)
    }
    const handleDec = () => {
        setCount(count - 1)
    }


    return (
        <div>
            <h1 style={{ margin: "1rem" }}>Counter</h1>
            <p style={{ padding: "4px 10px ", fontSize: "2em", marginLeft: "1rem" }}>{count}</p>
            <div className="">
                <button style={{ padding: "4px 10px ", fontSize: "2em", marginLeft: "1rem" }} onClick={handleInc}>+</button>
                <button style={{ padding: "4px 10px ", fontSize: "2em", marginLeft: "1rem" }} onClick={handleDec}>-</button>
            </div>
        </div>
    )
}

export default Counter