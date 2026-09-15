//import React Icons
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

export default function CustomArrows() {
  //Start Data CustomArrows
  const CustomArrows = [
    {
      icon: <GoChevronLeft />,
      style: {
        custom: "prev",
        leftARight: "-left-3",
      },
    },
    {
      icon: <GoChevronRight />,
      style: {
        custom: "next",
        leftARight: "-right-3",
      },
    },
  ];

  return (
    <section>
      {CustomArrows.map((CustomArrow, i) => {
        return (
          <div
            key={i}
            className={`custom-${CustomArrow.style.custom} absolute top-[55%] ${CustomArrow.style.leftARight} translate-y-[-50%] z-10 w-11 h-11 bg-white text-(--primary-color) rounded-full shadow-md shadow-black flex items-center justify-center cursor-pointer hover:bg-(--primary-color) hover:text-white transition duration-1000 text-4xl font-bold`}
          >
            {CustomArrow.icon}
          </div>
        );
      })}
    </section>
  );
}
