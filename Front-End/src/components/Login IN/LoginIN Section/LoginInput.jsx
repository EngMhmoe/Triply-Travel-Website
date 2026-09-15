//import Hook UseState
import { useState } from "react";

//import React Icons
import { FiEye, FiEyeOff } from "react-icons/fi";

//
import { Field } from "formik";

const LoginInput = ({ icon: Icon, type, name, placeholder }) => {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="relative mb-4">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-(--primary-color2)">
        <Icon />
      </span>

      <Field
        type={isPassword ? (show ? "text" : "password") : type}
        name={name}
        placeholder={placeholder}
        className="w-full border rounded-2xl py-3 pl-10 pr-10 outline-none focus:border-(--primary-color) bg-white"
      />

      {isPassword && (
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer duration-1000"
        >
          {show ? (
            <FiEye className="text-green-500" />
          ) : (
            <FiEyeOff className="text-(--primary-color2)" />
          )}
        </button>
      )}
    </div>
  );
};

export default LoginInput;
