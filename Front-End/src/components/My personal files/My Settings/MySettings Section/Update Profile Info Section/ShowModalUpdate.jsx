//import framer-motion
import { Field, Form, Formik } from "formik";

//import Libraries Yup
import * as Yup from "yup";

import { motion, AnimatePresence } from "framer-motion";

//import Input UI
import Input from "../../../../../UI/My personal files/Input";

export default function ShowModalUpdate({
  modal,
  setModal,
  userData,
  userDataSet,
}) {
  //Function CheckUpdateMyProfile
  const CheckUpdateMyProfile = (UserData) => {
    const updateUserData = {
      ...userData,
      username: UserData.first_name + " " + UserData.last_name,
      email: UserData.email,
      phoneNumber: UserData.phone,
      address: UserData.address,
      joinDate: UserData.joinDate,
    };

    //User Data
    userDataSet(updateUserData); // 🔥 ده هيحدث كل حاجة

    //
    setModal(false);

    //
    // window.location.reload();
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const Data_Inputs = [
    { name: "first name", value: "first_name", type: "text" },

    { name: "last name", value: "last_name", type: "text" },

    { name: "email", value: "email", type: "email" },

    { name: "phone", value: "phone", type: "number" },

    { name: "address", value: "address", type: "text" },

    { name: "JoinDate", value: "joinDate", type: "text" },
  ];

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //(1) function MyProfileFormCondition
  const MyProfileFormCondition = Yup.object({
    first_name: Yup.string(),

    last_name: Yup.string(),

    email: Yup.string()
      .required("Email is required!")
      .email("Please enter a valid email"),

    phone: Yup.string().max(11),

    address: Yup.string(),

    joinDate: Yup.string(),
  });

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //(2) Data User += First_Name & Last_Name & phone_Number & Address & joinDate
  const ShortcutUserName = {
    first_name: userData.username.split(" ")[0],
    last_name: userData.username.split(" ")[1],
    email: userData.email,
    phoneNumber: userData.phoneNumber,
    address: userData.address,
    joinDate: userData.joinDate,
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <AnimatePresence>
      {modal && (
        <motion.div
          className="fixed z-9000 inset-0 bg-black/95 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7 }}
            transition={{ duration: 0.5 }}
            className="bg-(--secondary-color) text-(--primary-pera)  p-7 rounded-2xl shadow-xl shadow-red-500 lg:w-[50%] md:w-[60%] sm:w-[70%] w-full  mx-5  text-center"
          >
            <Formik
              initialValues={{
                first_name: ShortcutUserName.first_name,
                last_name: ShortcutUserName.last_name,
                email: ShortcutUserName.email,
                phone: ShortcutUserName.phoneNumber,
                address: ShortcutUserName.address,
                joinDate: ShortcutUserName.joinDate,
              }}
              onSubmit={CheckUpdateMyProfile}
              validationSchema={MyProfileFormCondition}
            >
              <Form className="flex flex-col gap-10">
                {/* section ALL Inputs */}
                <section className="w-full grid grid-cols-2 gap-x-5 gap-y-8">
                  {Data_Inputs.map((item) => (
                    <Input
                      name={item.name}
                      value={item.value}
                      type={item.type}
                      readOnly={false}
                    />
                  ))}
                </section>

                {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\\//\/\/\/\/\/\/\/\/\/\/ */}
                {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\\//\/\/\/\/\/\/\/\/\/\/ */}

                <div className="flex justify-center gap-4">
                  <button
                    type="submit"
                    className="text-white bg-green-600 hover:text-green-600 hover:bg-green-200 font-bold duration-1000 cursor-pointer px-4 py-2 rounded-xl rounded-bl-none"
                  >
                    Update Data
                  </button>

                  {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
                  {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}

                  <button
                    type="button"
                    onClick={() => setModal(false)}
                    className="bg-red-200 text-(--primary-color2) hover:bg-(--primary-color2) hover:text-white font-bold duration-1000 cursor-pointer px-4 py-2 rounded-xl rounded-br-none"
                  >
                    Cancel
                  </button>
                </div>
              </Form>
            </Formik>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
