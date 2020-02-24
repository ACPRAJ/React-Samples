import React, { useState, useEffect } from 'react'

function ConditionalRender() {
    const [Count, setCount] = useState(0)
    const [NameText, setNameText] = useState('')

    useEffect(() => {
        document.title = `You clicked ${Count} times`;
        console.log("Use Effect - updated document title")
    }, [Count])

    return (
        <div>
            <input type="text" value={NameText} onChange={(event) => setNameText(event.target.value)} />
            <button onClick={() => setCount(Count + 1)}>Clicked {Count} times</button>
        </div>
    )
}

export default ConditionalRender
