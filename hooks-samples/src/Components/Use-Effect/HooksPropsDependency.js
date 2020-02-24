import React, { useState, useEffect } from 'react'

function HooksPropsDependency() {
    const [Count, setCount] = useState(0);
    const [CanDisplay, setCanDisplay] = useState(true)
    var interval = null;

    const stopCounter = () => {
        clearInterval(interval);
    }

    useEffect(() => {
        interval = setInterval(() => {
            //Either use the below code or include 'Count' dependency in return function
            //setCount((prevCount) => prevCount + 1);
            setCount(Count + 1)
        }, 1000)

        return (stopCounter)
    },// this is wrong useage as the count dependency is ignored here. [])
        [Count])

    return (
        <div>
            <button onClick={() => { setCanDisplay(!CanDisplay); }}>Toggle Component</button>
            {CanDisplay && <h3>{Count}</h3>}
        </div>
    )
}

export default HooksPropsDependency
