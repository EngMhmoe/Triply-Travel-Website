//import Hook UseState
import { useState } from "react";

//import Components
import CreateNewPasswordInput from "./CreateNewPasswordInput";
import CreateNewPasswordButton from "./CreateNewPasswordButton";

//import React Icons
import { FiLock } from "react-icons/fi";

//import toast
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateNewPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password || !ConfirmPassword) {
      toast.error("Please fill all fields");

      return;
    }

    setLoading(true);

    setTimeout(() => {
      toast.success("Login successful");

      setLoading(false);
    }, 1500);

    Navigate("/PasswordSuccessful_Page");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-1">
      {/* Component LoginInput */}
      <section className="flex flex-col gap-2">
        <label className="text-(--primary-color) text-md font-semibold">
          Password
        </label>

        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}

        <CreateNewPasswordInput
          icon={FiLock}
          type="password"
          placeholder="Enter your secure password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
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

        <CreateNewPasswordInput
          icon={FiLock}
          type="password"
          placeholder="Confirm your password"
          value={ConfirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
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
          Remember me
        </label>
      </section>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* Component LoginButton */}
      <CreateNewPasswordButton loading={loading} />
    </form>
  );
};

export default CreateNewPasswordForm;
