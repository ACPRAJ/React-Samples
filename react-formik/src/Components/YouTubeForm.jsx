import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ErrorText from "./ErrorText";

const initialValues = {
  txtName: "",
  txtEMail: "",
  txtChannel: "",
  txtComments: "",
  txtAddress: "",
  socialMedia: {
    txtFacebook: "",
    txtTwitter: "",
  },
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
  txtAddress: Yup.string().required("Address filed is required"),
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
          <ErrorMessage name="txtName" component={ErrorText} />
        </div>

        <div className="form-control">
          <label htmlFor="txtEMail">E-Mail</label>
          <Field
            type="email"
            id="txtEMail"
            name="txtEMail"
            placeholder="name@email.com"
          ></Field>
          <ErrorMessage name="txtEMail">
            {(errorMsg) => <div className="error">{errorMsg}</div>}
          </ErrorMessage>
        </div>

        <div className="form-control">
          <label htmlFor="txtChannel">Channel</label>
          <Field
            type="text"
            id="txtChannel"
            name="txtChannel"
            placeholder="Youtube Channel"
          ></Field>
          <ErrorMessage name="txtChannel" component={ErrorText} />
        </div>

        <div className="form-control">
          <label htmlFor="txtComments">Comments</label>
          <Field
            as="textarea"
            id="txtComments"
            name="txtComments"
            placeholder="Optional comments"
          />
        </div>

        <div className="form-control">
          <label htmlFor="txtAddress">Address</label>
          <Field name="txtAddress">
            {(props) => {
              const { field, form, meta } = props;
              console.log("Props debug: ", props);
              return (
                <div>
                  <input type="text" id="txtAddress" {...field} />
                  {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                  ) : null}
                </div>
              );
            }}
          </Field>
        </div>

        <div className="form-control">
          <label htmlFor="txtFacebook">Facebook Profile</label>
          <Field type="text" id="txtFacebook" name="social.txtFacebook" />
        </div>

        <div className="form-control">
          <label htmlFor="txtTwitter">Twitter Profile</label>
          <Field type="text" id="txtTwitter" name="social.txtTwitter" />
        </div>

        <button id="btnSubmit" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}

export default YouTubeForm;
