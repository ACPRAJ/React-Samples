import React from 'react'
import '../Styles/Styles.css'

function CssStyles(params) {
    let className = params.enableStyle ? "primary" : ""
    return(
        <h2 className={`${className} font-xl`}>Style Text</h2>
    )
}

export default CssStyles