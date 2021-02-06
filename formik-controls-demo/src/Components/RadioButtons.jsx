import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

function RadioButtons(props) {
  const { name, label, options, ...rest } = props;
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((item) => {
            return (
              <React.Fragment key={item.key}>
                <input
                  type="radio"
                  id={item.value}
                  {...field}
                  value={item.value}
                  checked={field.value === item.value}
                />
                <label htmlFor={item.value}>{item.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
}

export default RadioButtons;
