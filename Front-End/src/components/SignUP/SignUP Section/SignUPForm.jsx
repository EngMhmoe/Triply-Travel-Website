//import Hook UseState
import { useState } from "react";

//import Components
import SignUPInput from "./SignUPInput";
import SignUPButton from "./SignUPButton";

//import React Icons
import { FiUser, FiMail, FiLock } from "react-icons/fi";

//import toast
import toast from "react-hot-toast";

//import react-router-dom
import { useNavigate } from "react-router-dom";

//import formik
import { Formik, Form, ErrorMessage } from "formik";

//import Yup
import * as Yup from "yup";

//import axios
import axios from "axios";

const SignUPForm = () => {
  //is loading
  const [loading, setLoading] = useState(false);

  //
  const Navigate = useNavigate();

  //Function handleSubmit Form
  const handleSubmit = async (data) => {
    try {
      //Data Sign Up
      const SignUpData = {
        FirstName: data.FirstName + " " + data.LastName,
        email: data.email,
        password: data.password,
      };

      const res = await axios.post(
        "http://localhost:1337/api/auth/local/register",
        SignUpData,
      );

      if (data.password !== data.ConfirmPassword) {
        return;
      }
      console.log(res);

      ////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////

      //true loading
      setLoading(true);

      //Login successful
      setTimeout(() => {
        toast.success("Sign Up successful");

        //false loading
        setLoading(false);

        //go to Home
        setTimeout(() => {
          Navigate("/login_Page");

          window.scrollTo(0, 0);
        }, 1500);
      }, 1500);

      //Check is Email And Password Or Not
      if (!data.email || !data.password) {
        toast.error("Please fill all fields");

        return;
      }
    } catch (err) {
      console.log(err.response.data.error.massage);
    }
  };

  ////////////////////////////////////////////////////////////////////////////

  //Condition Yup Form
  const LoginSchema = Yup.object({
    FirstName: Yup.string().required("FirstName is required"),

    LastName: Yup.string().required("LastName is required"),

    email: Yup.string()
      .email("The email is incorrect")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "The password must be at least 6 characters long")
      .required("Password is required"),

    ConfirmPassword: Yup.string()
      .min(6, "The password must be at least 6 characters long")
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={{
        FirstName: "",
        LastName: "",
        email: "",
        password: "",
        ConfirmPassword: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      <Form className="flex flex-col gap-1">
        {/* Component SignUPInput === FirstName & LastName */}
        <div className="grid grid-cols-2 gap-3">
          {/* Component SignUPInput === FirstName */}
          <section className="flex flex-col gap-2">
            <label className="text-(--primary-color) text-md font-semibold">
              First Name
            </label>

            {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
            {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}

            <div>
              <SignUPInput
                icon={FiUser}
                type="text"
                name="FirstName"
                placeholder="First Name"
              />
              <ErrorMessage
                name="FirstName"
                component="p"
                className="text-red-500 text-sm mb-6"
              />
            </div>
          </section>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          {/* Component SignUPInput === LastName */}
          <section className="flex flex-col gap-2">
            <label className="text-(--primary-color) text-md font-semibold">
              Last Name
            </label>

            {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
            {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}

            <div>
              <SignUPInput
                icon={FiUser}
                type="Last_Name"
                name={"LastName"}
                placeholder="Last Name"
              />
              <ErrorMessage
                name="LastName"
                component="p"
                className="text-red-500 text-sm mb-6"
              />
            </div>
          </section>
        </div>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Component LoginInput */}
        <section className="flex flex-col gap-2">
          <label className="text-(--primary-color) text-md font-semibold">
            Email Address
          </label>

          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}

          <div>
            <SignUPInput
              icon={FiMail}
              type="email"
              name={"email"}
              placeholder="Enter your travel account email"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm mb-6"
            />
          </div>
        </section>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Component LoginInput */}
        <section className="flex flex-col gap-2">
          <label className="text-(--primary-color) text-md font-semibold">
            Password
          </label>
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
          <div>
            <SignUPInput
              icon={FiLock}
              type="password"
              name={"password"}
              placeholder="Enter your secure password"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-sm mb-6"
            />
          </div>
        </section>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Component LoginInput */}
        <section className="flex flex-col gap-2">
          <label className="text-(--primary-color) text-md font-semibold">
            Confirm Password
          </label>

          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}

          <div>
            {" "}
            <SignUPInput
              icon={FiLock}
              type="password"
              name={"ConfirmPassword"}
              placeholder="Confirm your password"
            />
            <ErrorMessage
              name="ConfirmPassword"
              component="p"
              className="text-red-500 text-sm mb-6"
            />
          </div>
        </section>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <section>
          <label className="flex items-center gap-2 text-sm mb-5 text-white">
            <input
              type="checkbox"
              className="checkbox  w-5 h-5 bg-white checked:border-(--primary-color2) checked:bg-(--primary-color2) checked:text-white"
            />
            {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
            {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}I agree with
            the{" "}
            <span className="text-(--primary-color2)">Terms Of Service</span>
          </label>
        </section>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Component LoginButton */}
        <SignUPButton loading={loading} />
      </Form>
    </Formik>
  );
};

export default SignUPForm;
