import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import * as yup from "yup";
import { render } from "@testing-library/react";

export default function Home(props) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: yup.object({
      firstName: yup
        .string()
        .max(7, "max 7 length")
        .required("required"),
      email: yup
        .string()
        .email("invalid email")
        .required("required"),
      password: yup
        .string()
        .matches(
          /(?=.*[a-z])(?=.*[A-Z]\w)/,
          "password must have lowerCase nd upperCase"
        )
        .required("required"),
    }),
    onSubmit: (values, { setStatus }) => {
      setStatus(true);
      console.log(values, "values");
      setTimeout(() => {
        setStatus(false);
      }, 1000);
    },
  });

  console.log(formik);

  return (
    <>
      {!formik.status && (
        <form id="form" onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">firstName</label>
          <input
            type="text"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          ></input>
          {formik.errors.firstName && formik.touched.firstName ? (
            <p>{formik.errors.firstName}</p>
          ) : null}
          <label htmlFor="email">email</label>
          <input
            type="text"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          ></input>
          {formik.errors.email && formik.touched.email ? (
            <p>{formik.errors.email}</p>
          ) : null}
          <label htmlFor="password">password</label>
          <input
            type="text"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          ></input>
          {formik.errors.password && formik.touched.password ? (
            <p>{formik.errors.password}</p>
          ) : null}
          {
            <button type="submit" disabled={formik.isValid ? false : true}>
              submit
            </button>
          }
          <br></br>
        </form>
      )}
      {formik.status && <p>loading...</p>}
    </>
  );
}

// const submitHandler = (values) => {
//   console.log("submitted", values);
// };
// const validate = (values) => {
//   let error = {};
//   if (!values.email) {
//     error.email = "Required";
//   } else if (
//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//   ) {
//     error.email = "Invalid email";
//   }
//   if (!values.firstName) {
//     error.firstName = "Required";
//   } else if (values.firstName.length > 7) {
//     error.firstName = "length must be less than 7";
//   }
//   if (!values.lastName) {
//     error.lastName = "Required";
//   } else if (values.lastName.length > 7) {
//     error.lastName = "length must be less than 7";
//   }
//   if (!values.password) {
//     error.password = "Required";
//   } else if (
//     !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
//       values.password
//     )
//   ) {
//     error.password = "password must [A-Z] [a-z] [0-9] and special characters";
//   }
//   return error;
// };
// const formik = useFormik({
//   initialValues: {
//     firstName: "",
//     lastName: "",
//     password: "",
//     email: "",
//   },
//   validate,
//   onSubmit: (values) => {
//     // submitHandler();
//     console.log(values);
//   },
// });
