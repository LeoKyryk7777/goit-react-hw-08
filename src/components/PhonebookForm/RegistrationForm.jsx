import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";
import * as Yup from "yup";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().min(3, "Min 3 symbols").required("Name required"),
    email: Yup.string().email("Invalid email").required("Email required"),
    password: Yup.string()
      .min(7, "Min 7 symbols")
      .required("Password required"),
  });
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, option) => {
    console.log(values);
    dispatch(registerThunk(values));
  };
  return (
    <div className="hero bg-pink-50 py-16">
      <div className="hero-content flex-col space-y-8 w-full max-w-md">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full shadow-2xl">
          <div className="card-body">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <Field
                    name="name"
                    type="name"
                    className="input"
                    placeholder="Name"
                  />
                  <label className="label">Email</label>
                  <Field
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <Field
                    name="password"
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                  <div>
                    <Link to="/login" className="link link-hover">
                      You already have account? Sign in!
                    </Link>
                  </div>
                  <button type="submit" className="btn btn-neutral mt-4">
                    Register
                  </button>
                </fieldset>
              </Form>
            </Formik>
            <div className="divider divider-secondary">
              <Link className="text-lg" to="/">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterForm;
