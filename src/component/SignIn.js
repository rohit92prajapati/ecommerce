import React, { useEffect, useState, Fragment } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

const validationSchema = yup.object({
  username: yup.string("Enter your usename").required("User Name is required"),

  password: yup
    .string("Enter your password")
    .min(5, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});
export default function SignIn() {
  const formik = useFormik({
    initialValues: {
      username: "",

      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const response = await axios.post(
        "https://fakestoreapi.com/auth/login",
        values
      );
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-rows-2  grid-flow-row gap-4 auto-cols-auto p-10 items-end w-1/2">
          <div>User Name</div>
          <div>
            {" "}
            <TextField
              fullWidth
              id="username"
              name="username"
              label="User Name"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
          </div>
          <div>Password</div>
          <div>
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </div>

          <div></div>
          <Button color="primary" variant="contained" fullWidth type="submit">
            Sign In
          </Button>
        </div>
      </form>
    </Fragment>
  );
}
