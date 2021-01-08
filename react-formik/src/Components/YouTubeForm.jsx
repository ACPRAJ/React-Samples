import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  txtName: "",
  txtEMail: "",
  txtChannel: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validate = (values) => {
  let errors = {};

  if (!values.txtName) {
    errors.txtName = "Required";
  }

  if (!values.txtEMail) {
    errors.txtEMail = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.txtEMail)
  ) {
    errors.txtEMail = "Invalid email format";
  }

  if (!values.txtChannel) {
    errors.txtChannel = "Required";
  }

  return errors;
};

const validationSchema = Yup.object({
  txtName: Yup.string().required("Name is required"),
  txtEMail: Yup.string()
    .required("E-Mail is required")
    .email("E-mail format is incorrect"),
  txtChannel: Yup.string().required("Channel is required"),
});

function YouTubeForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    //validate,
  });

  console.log("Form Visits", formik.touched);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="txtName">Name</label>
          <input
            type="text"
            id="txtName"
            name="txtName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.txtName}
          ></input>
          {formik.touched.txtName && formik.errors.txtName ? (
            <div className="error">{formik.errors.txtName}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="txtEMail">E-Mail</label>
          <input
            type="email"
            id="txtEMail"
            name="txtEMail"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.txtEMail}
          ></input>
          {formik.touched.txtEMail && formik.errors.txtEMail ? (
            <div className="error">{formik.errors.txtEMail}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="txtChannel">Channel</label>
          <input
            type="text"
            id="txtChannel"
            name="txtChannel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.txtChannel}
          ></input>
          {formik.touched.txtChannel && formik.errors.txtChannel ? (
            <div className="error">{formik.errors.txtChannel}</div>
          ) : null}
        </div>

        <button id="btnSubmit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default YouTubeForm;
