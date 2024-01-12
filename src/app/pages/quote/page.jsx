"use client"

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { TextField } from "@mui/material";
import { StyledBtn } from "./quote.style";

const ContactForm = () => {
  const [from_name, setFrom_name] = useState("");
  const [from_email, setFrom_email] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const form = useRef();

  const textFieldStyle = {
    background: "#fff",
    borderRadius: "5px",
    border: 0,
    color: "#ececec",
    "&:hover": {
      border: 0,
    },
  };

  const handleSubmit = (e) => {
    const templateParams = {
      from_name,
      from_email,
      telephone,
      message,
    };

    emailjs
      .sendForm("service_bc9o4mk", "template_ju3zgn7", form.current, "87kOQ-WSMCustdQIR")
      .then(
        (response) => {
          // Show success message
          setSuccessMessage("Email sent successfully!");
          // Clear form fields
          setFrom_name("");
          setFrom_email("");
          setTelephone("");
          setMessage("");
        },
        (error) => {
          console.error("Error sending email:", error);
          // Handle error if needed
        }
      );
  };

  const schema = Yup.object({
    from_name: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
    from_email: Yup.string().email("Invalid email address").required("Required"),
    telephone: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
    message: Yup.string().max(500, "Must be 500 characters or less").required("Required"),
  });

  return (
    <div style={{marginTop: "100px"}}>
      <Formik
        initialValues={{
          from_name: "",
          from_email: "",
          telephone: "",
          message: "",
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values);
          form.current.reset();
          setSubmitting(false);
        }}
      >
        {({ values, errors, touched, handleChange, isSubmitting }) => (
          <Form ref={form}>
            <TextField
                style={textFieldStyle}
                margin="dense"
                label="Nume"
                name="from_name"
                value={values.from_name}
                onChange={handleChange} // eslint-disable-line}
                // onBlur={handleBlur}
                // helperText={touched.from_name ? errors.from_name : ''}
                error={touched.from_name && Boolean(errors.from_name)}
               
                fullWidth
              />
              <TextField
                style={textFieldStyle}
                margin="dense"
                label="Email"
                name="from_email"
                value={values.from_email}
                onChange={handleChange}
                // onBlur={handleBlur}
                // helperText={touched.from_email ? errors.from_email : ''}
                error={touched.from_email && Boolean(errors.from_email)}
                //
                fullWidth
              />
              <TextField
                style={textFieldStyle}
                margin="dense"
                label="Telefon"
                name="telephone"
                value={values.telephone}
                onChange={handleChange}
                // onBlur={handleBlur}
                // helperText={touched.telephone ? errors.telephone : ''}
                error={touched.telephone && Boolean(errors.telephone)}
                //
                fullWidth
              />
              <TextField
                style={textFieldStyle}
                margin="dense"
                label="Mesaj"
                name="message"
                value={values.message}
                onChange={handleChange}
                // onBlur={handleBlur}
                // helperText={touched.message ? errors.message : ''}
                error={touched.message && Boolean(errors.message)}
                //
                fullWidth
                multiline
                rows={2}
              />
            <StyledBtn type="submit" disabled={isSubmitting} size="large">
              Trimite
            </StyledBtn>
          </Form>
        )}
      </Formik>
      {successMessage && <p style={{ color: "green", textAlign: "center" }}>{successMessage}</p>}
    </div>
  );
};

export default ContactForm;
