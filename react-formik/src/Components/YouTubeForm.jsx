import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import ErrorText from "./ErrorText";

const initialValues = {
  txtName: "Pradheep",
  txtEMail: "raj@gmail.com",
  txtChannel: "Channel",
  txtComments: "",
  txtAddress: "Address",
  socialMedia: {
    txtFacebook: "",
    txtTwitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbersArray: [""],
};

const savedValues = {
  txtName: "Pradheep Raj",
  txtEMail: "acpraj@gmail.com",
  txtChannel: "You Tube Channel",
  txtComments: "This channel is awesome",
  txtAddress: "121 Upstream Road",
  socialMedia: {
    txtFacebook: "",
    txtTwitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbersArray: [""],
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

const commentsValidator = (value) => {
  let error;
  if (!value) error = "Comments is required";

  return error;
};

function YouTubeForm() {
  const [formValues, setFormValues] = useState(null);

  return (
    <Formik
      initialValues={formValues || initialValues} //{initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
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
            validate={commentsValidator}
            placeholder="Comments"
          />
          <ErrorMessage name="txtComments" component={ErrorText} />
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

        <div className="form-control">
          <label htmlFor="txtPrimaryPhone">Primary Phone</label>
          <Field type="text" id="txtPrimaryPhone" name="phoneNumbers[0]" />
        </div>

        <div className="form-control">
          <label htmlFor="txtSecondaryPhone">Secondary Phone</label>
          <Field type="text" id="txtSecondaryPhone" name="phoneNumbers[1]" />
        </div>

        <div className="form-control">
          <label htmlFor="txtPhNumbersArray">List of phone numbers</label>
          <FieldArray id="txtPhNumbersArray" name="phNumbersArray">
            {(fieldProps) => {
              const { push, remove, form } = fieldProps;
              const { values } = form;
              const { phNumbersArray } = values;
              //console.log("Field Array Props:", phNumbersArray);

              return (
                <div>
                  {phNumbersArray.map((item, key) => (
                    <div key={key}>
                      <Field type="tel" name={`phNumbersArray[${key}]`} />
                      <button type="button" onClick={() => push("")}>
                        +
                      </button>
                      {key !== 0 && (
                        <button type="button" onClick={() => remove(key)}>
                          -
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray>
        </div>

        <button type="button" onClick={() => setFormValues(savedValues)}>
          Load Saved Data
        </button>
        <button id="btnSubmit" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}

export default YouTubeForm;
