//import Hook UseState
import { useState } from "react";

//import Components
import ResetYourPasswordButton from "./ResetYourPasswordButton";
import InputFieldCode from "./InputFieldCode";

const ForgotPasswordForm = () => {
  const [loading, setLoading] = useState(false);

  return (
    <form className="w-full" onSubmit={(e) => e.preventDefault()}>
      <div className="w-78 m-auto flex flex-col gap-10 font-bold">
        {/* Component InputFieldCode */}
        <InputFieldCode />

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Component LoginButton */}
        <ResetYourPasswordButton loading={loading} />
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
