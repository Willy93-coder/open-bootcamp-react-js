import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LEVELS } from "../../../models/levels.enum";

const TaskFormik = ({ add, length }) => {
    const task = {
        name: "",
        description: "",
        completed: false,
        level: "",
    };

    const taskSchema = Yup.object().shape({
        name: Yup.string().min(1, "No Task Name").required("Required"),
        description: Yup.string()
            .min(1, "No Task Description")
            .required("Required"),
        level: Yup.string()
            .oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING])
            .required("Required"),
    });

    function addTask(values) {
        add(values);
    }

    return (
        <div>
            <Formik
                initialValues={task}
                validationSchema={taskSchema}
                onSubmit={(values) => addTask(values)}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Field
                            id="inputName"
                            name="name"
                            type="text"
                            className="form-control form-control-lg"
                            required
                            placeholder="Task Name"
                        />
                        {/* Task Name Errors */}
                        {errors.name && touched.name && (
                            <ErrorMessage
                                name="name"
                                component="div"
                            ></ErrorMessage>
                        )}
                        <Field
                            id="inputDescription"
                            name="description"
                            type="text"
                            className="form-control form-control-lg"
                            required
                            placeholder="Task Description"
                        />
                        {/* Task Description Errors */}
                        {errors.description && touched.description && (
                            <ErrorMessage
                                name="description"
                                component="div"
                            ></ErrorMessage>
                        )}
                        <Field
                            as="select"
                            className="form-control form-control-lg"
                            id="selectedLevel"
                            name="level"
                        >
                            <option value={LEVELS.NORMAL}>Normal</option>
                            <option value={LEVELS.URGENT}>Urgent</option>
                            <option value={LEVELS.BLOCKING}>Blocking</option>
                        </Field>
                        <button
                            type="submit"
                            className="btn btn-success btn-lg ms-2"
                        >
                            {length > 0
                                ? "Add New Task"
                                : "Create Your First Task"}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default TaskFormik;
