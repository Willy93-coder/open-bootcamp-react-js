import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    password: Yup.string().required("Password is required"),
});

const LoginFormik = () => {
    const initialCredencials = {
        email: "",
        password: "",
    };

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                // Initial values that the form will take
                initialValues={initialCredencials}
                // Yup validation schema
                validationSchema={loginSchema}
                // on submit event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    // We save data in the localStorage
                    localStorage.setItem("credentials", values);
                }}
            >
                {/* We optain props from formik */}
                {({
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                }) => (
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            type="email"
                            name="email"
                            placeholder="example@email.com"
                        />

                        {/* Email Errors */}
                        {errors.email && touched.email && (
                            <ErrorMessage
                                name="email"
                                component="div"
                            ></ErrorMessage>
                        )}

                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                        />
                        {/* Password Errors */}
                        {errors.password && touched.password && (
                            <ErrorMessage
                                name="password"
                                component="div"
                            ></ErrorMessage>
                        )}
                        <button type="submit">Login</button>
                        {isSubmitting ? <p>Login your credentials...</p> : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default LoginFormik;
