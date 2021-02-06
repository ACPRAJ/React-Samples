import React from 'react'
import {Field, ErrorMessage} from "formik"
import ErrorText from './ErrorText'

function Textarea(props) {
    const {name, label, ...rest} = props
    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <Field as="textarea" id={name} name={name} {...rest}/>
            <ErrorMessage name={name} component={ErrorText}/>
        </div>
    )
}

export default Textarea
