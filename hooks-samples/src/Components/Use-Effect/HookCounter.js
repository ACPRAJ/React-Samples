import React, { useState, useEffect } from 'react'

function HookCounter() {
    const [Count, setCount] = useState(0);

    const updateDocTitle = () => {
        document.title = `You clicked the button ${Count} times`
    }

    useEffect(updateDocTitle)

    return (
        <div>
            <button onClick={() => setCount(Count + 1)}>Clicked {Count} Times</button>
        </div>
    )
}

export default HookCounter
