import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl';

function FormikContainer() {
    const initialValues = {
        email: "",
    }
    const validationSchema = Yup.object({
        email: Yup.string().required("Email field is required").email("Invalid Email format")
    });
    const onSubmit = (values, onSubmitProps) => {
        console.log("Form Data ", values)
        console.log("On Submit Props", onSubmitProps)
    }
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                (formik) => <Form>
                    <FormikControl control="input" label="EMail" name="email" type="email"/>
                    <button type="submit">Submit</button>
                </Form>
            }
        </Formik>
    )
}

export default FormikContainer
