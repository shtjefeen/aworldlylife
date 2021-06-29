import React, { useState } from "react";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import Input from "./Input";
import TextArea from "./TextArea";
import Loader from "@loaders/Global";
import Alert from "@material-ui/lab/Alert";
const Wrapper = styled.div``;

export default function Form() {
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = (values, formikApi) => {
    emailjs
      .send("service_04jvxyr", "default", values, "user_fpQ6HyT7RZAe3eIf0aQcY")
      .then(
        (result) => {
          formikApi.setSubmitting(false);
          setMessageSent(true);
        },
        (error) => {
          formikApi.setSubmitting(false);
          setError(true);
        }
      );
  };
  return (
    <Wrapper>
      <Formik
        initialValues={{ name: "", email: "", subject: "", message: "" }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Required"),
          email: Yup.string()
            .email("Please enter a valid email")
            .required("Required"),
          subject: Yup.string().required("Required"),
          message: Yup.string(),
        })}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            {error && (
              <Alert style={{ marginBottom: 15 }} severity="error">
                Something went wrong! Please try again
              </Alert>
            )}
            {messageSent && (
              <Alert style={{ marginBottom: 15 }} severity="success">
                Thank you for contacting us! We will be back to you as soon as
                possible
              </Alert>
            )}
            <Input
              type="text"
              name="name"
              label="Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              error={errors.name && touched.name && errors.name}
            />
            <Input
              type="email"
              name="email"
              label="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={errors.email && touched.email && errors.email}
            />
            <Input
              type="text"
              name="subject"
              label="Subject"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.subject}
              error={errors.subject && touched.subject && errors.subject}
            />
            <TextArea
              name="message"
              label="Message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              error={errors.message && touched.message && errors.message}
            />

            <Button
              color="primary"
              variant="contained"
              type="submit"
              disabled={isSubmitting}
              style={{ marginTop: 15 }}
            >
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </Wrapper>
  );
}
