//import Hook UseState
import { useState } from "react";

//import Components
import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";

//import React Icons
import { FiMail, FiLock } from "react-icons/fi";

//import toast
import toast from "react-hot-toast";

//import react-router-dom
import { Link, useNavigate } from "react-router-dom";

//import formik
import { Formik, Form, ErrorMessage } from "formik";

//import Yup
import * as Yup from "yup";

//import axios
import axios from "axios";

//import zustandStore
import { useAuthStore } from "../../../Store/useAuthStore";
import { useUserDataStore } from "../../../Store/useUserDataStore";

const LoginForm = () => {
  //is loading
  const [loading, setLoading] = useState(false);

  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////

  //login Store
  const login = useAuthStore((state) => state.login);

  //Data User
  const { setUserData } = useUserDataStore();

  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////

  //Navigate
  const Navigate = useNavigate();

  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////

  //Function handleSubmit Form
  const handleSubmit = async (data) => {
    try {
      //Data Login In
      const LoginINData = {
        identifier: data.email,
        password: data.password,
      };

      const res = await axios.post(
        "http://localhost:1337/api/auth/local",
        LoginINData,
      );

      ////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////

      //login
      login(res.data.jwt); // 🔥 ده هيحدث كل حاجة

      //User Data
      setUserData({
        ...res.data.user,
        image: "",
      }); // 🔥 ده هيحدث كل حاجة

      ////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////

      //true loading
      setLoading(true);

      //Login successful
      setTimeout(() => {
        toast.success("Login successful");

        //false loading
        setLoading(false);

        //go to Home
        setTimeout(() => {
          Navigate("/");

          window.scrollTo(0, 0);
        }, 1500);
      }, 1500);

      //Check is Email And Password Or Not
      if (!data.email || !data.password) {
        toast.error("Please fill all fields");

        return;
      }
    } catch (err) {
      console.log(err.res.data);
    }
  };

  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////

  //Condition Yup Form
  const LoginSchema = Yup.object({
    email: Yup.string()
      .email("The email is incorrect")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "The password must be at least 6 characters long")
      .required("Password is required"),
  });

  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      <Form className="flex flex-col gap-1">
        {/* Component LoginInput */}
        <section className="flex flex-col gap-2">
          <label className="text-(--primary-color) text-md font-semibold">
            Email Address
          </label>

          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}

          <div>
            <LoginInput
              icon={FiMail}
              type="email"
              name="email"
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
            <LoginInput
              icon={FiLock}
              type="password"
              name="password"
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

        <section className="flex items-center justify-between text-sm mb-5 text-white">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="checkbox  w-5 h-5 bg-white checked:border-(--primary-color2) checked:bg-(--primary-color2) checked:text-white"
            />
            {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
            {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
            Remember Me
          </label>

          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}

          <Link
            to="/SendResetLink_Page"
            className="text-(--primary-color2) text-md font-semibold hover:text-(--primary-color) duration-1000"
          >
            Forgot password?
          </Link>
        </section>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Component LoginButton */}
        <LoginButton loading={loading} />
      </Form>
    </Formik>
  );
};

export default LoginForm;
