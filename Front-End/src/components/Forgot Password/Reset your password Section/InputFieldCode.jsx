//import Hooks React
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//import Libraries Formik
// import { Field } from "formik";

export default function InputFieldCode() {
  //Data Inputs Field
  const DataInputsField = [
    {
      name: "num1",
      id: "inp1",
    },
    {
      name: "num2",
      id: "inp2",
    },
    {
      name: "num3",
      id: "inp3",
    },
    {
      name: "num4",
      id: "inp4",
    },
  ];

  const Navigate = useNavigate("");

  //   Function EnterTabInputs
  useEffect(() => {
    const inp1 = document.getElementById("inp1");
    const inp2 = document.getElementById("inp2");
    const inp3 = document.getElementById("inp3");
    const inp4 = document.getElementById("inp4");
    const submit = document.getElementById("submit");

    inp1.focus();

    inp1.addEventListener("keyup", () => {
      inp2.focus();

      inp1.style.backgroundColor = "#0c2c7a";
      inp1.style.color = "white";
    });

    inp2.addEventListener("keyup", () => {
      inp3.focus();

      inp2.style.backgroundColor = "#0c2c7a";
      inp2.style.color = "white";
    });

    inp3.addEventListener("keyup", () => {
      inp4.focus();
      inp3.style.backgroundColor = "#0c2c7a";
      inp3.style.color = "white";
    });

    inp4.addEventListener("keyup", () => {
      inp4.style.backgroundColor = "#0c2c7a";
      inp4.style.color = "white";
      submit.click();
      Navigate("/CreateNewPassword_Page");
    });
  }, []);

  return (
    <div className="flex justify-center items-center gap-6">
      {DataInputsField.map((data) => {
        return (
          <input
            name={data.name}
            id={data.id}
            type="text"
            className="border py-4 w-15 rounded-xl text-center text-xl bg-white"
            required
          />
        );
      })}
    </div>
  );
}
