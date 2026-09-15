//import React Icon
import { GrSend } from "react-icons/gr";

const CreateNewPasswordButton = ({ loading }) => {
  return (
    <button
      type="submit"
      className="w-full bg-(--primary-color) hover:bg-(--primary-pera) text-white py-3 rounded-2xl flex items-center justify-center gap-2 transition duration-1000 cursor-pointer"
    >
      {loading ? (
        "Loading..."
      ) : (
        <>
          <GrSend />
          Reset Password
        </>
      )}
    </button>
  );
};

export default CreateNewPasswordButton;
