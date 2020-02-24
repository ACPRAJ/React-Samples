import React, { useState, useEffect } from 'react';

function RenderOnlyOnce() {
    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);

    const onMouseMove = (event) => {
        console.log("On Mouse Move method called")
        setX(event.clientX);
        setY(event.clientY);
    }

    const onComponentUnmount = () => {
        console.log("Unmount method called");
        window.removeEventListener("mousemove", onMouseMove);
    }

    useEffect(() => {
        console.log("Use Effect method called")
        window.addEventListener("mousemove", onMouseMove)

        return onComponentUnmount;
    }, [])

    return (
        <div>
            Hooks - Mouse Position X = {X}, Y = {Y}
        </div>
    )
}

export default RenderOnlyOnce
