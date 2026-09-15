//import formik
import { Field, Form } from "formik";

//import Components
import ButtonSubmit from "./ButtonSubmit";

export default function UpdateProfileInfoForm({ userData, setModal }) {
  const Data_Inputs = [
    {
      name: "first name",
      value: userData.username.split(" ")[0],
      type: "text",
    },

    { name: "last name", value: userData.username.split(" ")[1], type: "text" },

    { name: "email", value: userData.email, type: "email" },

    { name: "phone", value: userData.phoneNumber, type: "number" },

    { name: "address", value: userData.address, type: "text" },

    { name: "JoinDate", value: userData.joinDate, type: "text" },
  ];

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setModal(true);
      }}
      className=" flex flex-col flex-wrap gap-6 w-full text-(--primary-pera)"
    >
      {/* section ALL Inputs */}
      <section className="w-full md:grid grid-cols-2 gap-x-5 flex flex-col gap-y-8">
        {Data_Inputs.map((item) => (
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor={item.name}
              className="font-semibold text-[15px] text-start"
            >
              {item.name}
            </label>

            {/* /////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////// */}

            <input
              readOnl
              value={item.value}
              name={item.value}
              id={name}
              type={item.type}
              placeholder={name}
              className={
                "w-full border outline-(--primary-color) border-(--primary-pera) rounded-2xl rounded-bl-none h-12.5 px-4 text-[18px]  duration-300"
              }
            />
          </div>
        ))}
      </section>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* Section MyProfileFormButtonSubmit */}
      <ButtonSubmit />
    </form>
  );
}
