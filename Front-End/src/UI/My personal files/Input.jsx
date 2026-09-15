//import formik
import { ErrorMessage, Field } from "formik";

export default function Input({ name = "", value = "", type = "text" }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={name} className="font-semibold  text-[15px] text-start">
        {name}
      </label>

      {/* /////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////// */}

      <Field
        name={value}
        id={name}
        type={type}
        placeholder={name}
        className={
          "w-full border outline-(--primary-color) border-(--primary-pera) rounded-2xl rounded-bl-none h-12.5 px-4 text-[18px]  duration-300"
        }
      />
      {/* /////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////// */}
      {/* Alert Error */}
      <ErrorMessage
        name={value}
        component={"p"}
        className="text-red-500 text-[14px] font-semibold text-start"
      />
    </div>
  );
}
