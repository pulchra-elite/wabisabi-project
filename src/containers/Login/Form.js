import React from "react";
import { withFormik } from "formik";

const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) => (
  <form className="form" onSubmit={handleSubmit}>
    <fieldset>
      {isSubmitting ? "submitting" : ""}
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.username}
      />
      {touched.username && errors.username && <div>{errors.username}</div>}

      <label htmlFor="username">Password</label>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      />
      {touched.password && errors.password && <div>{errors.password}</div>}

      <button className="button -primary" type="submit" disabled={isSubmitting}>
        Log in
      </button>
    </fieldset>
  </form>
);

export default props => {
  const Enhanced = withFormik({
    mapPropsToValues: props => ({ username: "", password: "" }),
    validate: (values, props) => {
      const errors = {};
      return errors;
    },
    handleSubmit: props.handleSubmit
  })(InnerForm);

  return <Enhanced />;
};
