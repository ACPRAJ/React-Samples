import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

function CheckBoxGroup(props) {
  const { name, label, options, ...rest } = props;
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name}>
        {({ field }) => {
          return options.map((item) => {
            return (
              <React.Fragment key={item.key}>
                <input
                  type="checkbox"
                  id={item.value}
                  {...field}
                  {...rest}
                  value={item.value}
                  checked={field.value.includes(item.value)}
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

export default CheckBoxGroup;
