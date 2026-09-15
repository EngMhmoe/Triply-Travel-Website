//import React icons
import { FiLogOut } from "react-icons/fi";

//import react-router-dom
import { Link, useNavigate } from "react-router-dom";

export default function MyLinks({ UlMyLinks }) {
  //Navigate
  const Navigate = useNavigate();

  return (
    <ul className="flex flex-col gap-4">
      {/* My Links */}
      {UlMyLinks.map((item, index) => {
        return (
          <li key={index} className={item.style}>
            <Link to={item.href} className="flex items-center gap-2">
              <h1>{item.icon}</h1>
              {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
              {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
              <h1>{item.name}</h1>
            </Link>
          </li>
        );
      })}

      {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
      {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}

      {/* Log Out */}
      <li className="group p-2 rounded-4xl rounded-bl-none duration-1200 cursor-pointer">
        <button
          onClick={() => {
            localStorage.removeItem("token");
            Navigate("/");
            window.location.reload();
          }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <FiLogOut className="text-[20px] text-(--primary-color) group-hover:text-(--primary-color) group-hover:ml-2 duration-800" />
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
          <h1>Log Out</h1>
        </button>
      </li>
    </ul>
  );
}
