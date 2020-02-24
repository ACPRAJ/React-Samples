import React, { useState } from 'react'
import RenderOnlyOnce from './RenderOnlyOnce'

function MouseContainer() {
    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Component</button>
            {display && <RenderOnlyOnce />}
        </div>
    )
}

export default MouseContainer
