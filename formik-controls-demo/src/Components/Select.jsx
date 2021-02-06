import React from 'react'
import {Field, ErrorMessage} from 'formik'
import ErrorText from './ErrorText';

function Select(props) {
    const {name, label, options, ...rest} = props;
    return (
        <div className="form-control">
            <Field as="select" name={name} label={label} {...rest}>
                {
                    options.map(item => {
                        return (
                            <option key={item.key} value={item.value}>
                                {item.key}
                            </option>
                        )
                    })
                }
            </Field>
            <ErrorMessage name={name} component={ErrorText}/>
        </div>
    )
}

export default Select
