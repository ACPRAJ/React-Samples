import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  txtName: "",
  txtEMail: "",
  txtChannel: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  txtName: Yup.string().required("Name is required"),
  txtEMail: Yup.string()
    .required("E-Mail is required")
    .email("E-mail format is incorrect"),
  txtChannel: Yup.string().required("Channel is required"),
});

function YouTubeForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="txtName">Name</label>
          <Field type="text" id="txtName" name="txtName"></Field>
          <ErrorMessage name="txtName" />
        </div>

        <div className="form-control">
          <label htmlFor="txtEMail">E-Mail</label>
          <Field type="email" id="txtEMail" name="txtEMail"></Field>
          <ErrorMessage name="txtEMail" />
        </div>

        <div className="form-control">
          <label htmlFor="txtChannel">Channel</label>
          <Field type="text" id="txtChannel" name="txtChannel"></Field>
          <ErrorMessage name="txtChannel" />
        </div>

        <button id="btnSubmit" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}

export default YouTubeForm;
