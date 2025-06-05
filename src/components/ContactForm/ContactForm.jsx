import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";

import { useDispatch } from "react-redux";
import { addContactThunk } from "../../redux/contactsOps";

export default function ContactForm() {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    number: "",
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (data, { resetForm }) => {
    const newContact = {
      name: data.name,
      number: data.number,
      id: nanoid(),
    };
    dispatch(addContactThunk(newContact));
    resetForm();
  };
  return (
    <div className="flex justify-center items-center py-8 bg-pink-50">
      <Formik
        initialValues={initialValues}
        validationSchema={FeedbackSchema}
        onSubmit={handleSubmit}
      >
        <Form className="bg-white p-8 rounded-2xl shadow-lg border border-pink-100 w-full max-w-md space-y-6">
          <h2 className="text-2xl font-semibold text-center text-gray-700">
            Add Contact
          </h2>
          <div>
            <label htmlFor={nameFieldId} className="block mb-1 text-gray-600">
              Name
            </label>
            <Field
              type="text"
              name="name"
              id={nameFieldId}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <ErrorMessage
              name="name"
              component="span"
              className="text-sm text-red-500"
            />
          </div>

          <div>
            <label htmlFor={numberFieldId} className="block mb-1 text-gray-600">
              Number
            </label>
            <Field
              type="text"
              name="number"
              id={numberFieldId}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <ErrorMessage
              name="number"
              component="span"
              className="text-sm text-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-400 hover:bg-pink-500 text-white font-medium py-2 rounded-lg transition duration-300"
          >
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
