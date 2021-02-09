import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
  const dropDownOptions = [
    { key: "Select An Option", value: "" },
    { key: "Option 1", value: "Option 1" },
    { key: "Option 2", value: "Option 2" },
    { key: "Option 3", value: "Option 3" },
  ];
  const radioButtonOptions = [
    { key: "Option 1", value: "rOption 1" },
    { key: "Option 2", value: "rOption 2" },
    { key: "Option 3", value: "rOption 3" },
  ];
  const checkBoxTopicOptions = [
    { key: "Option 1", value: "chkOption 1" },
    { key: "Option 2", value: "chkOption 2" },
    { key: "Option 3", value: "chkOption 3" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOptions: "",
    radioOptions: "",
    checkBoxOptions: [],
    birthDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email field is required")
      .email("Invalid Email format"),
    description: Yup.string().required("Description field is required"),
    selectOptions: Yup.string().required("Topic selection is required"),
    radioOptions: Yup.string().required("Radio button selection is required"),
    checkBoxOptions: Yup.array().min(1, "Check box options are required"),
    birthDate: Yup.date().required("Birth date is required").nullable(),
  });
  const onSubmit = (values, onSubmitProps) => {
    console.log("Form Data ", values);
    console.log("On Submit Props", onSubmitProps);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            label="EMail"
            name="email"
            type="email"
          />
          <FormikControl
            control="textarea"
            name="description"
            label="Description"
          />
          <FormikControl
            control="select"
            name="selectOptions"
            label="Select A Topic"
            options={dropDownOptions}
          />
          <FormikControl
            control="radio"
            name="radioOptions"
            label="Select A Radio Button"
            options={radioButtonOptions}
          />
          <FormikControl
            control="checkbox"
            name="checkBoxOptions"
            label="Check Box Options"
            options={checkBoxTopicOptions}
          />
          <FormikControl control="date" name="birthDate" label="Birth Date" />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
