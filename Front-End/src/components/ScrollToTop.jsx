import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  const { pathname } = useLocation();

  // عند تغيير الصفحة
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  // متابعة الـ Scroll لإظهار الزر
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollTop}
      className="fixed bottom-8 z-200000 right-8 bg-(--primary-color2) cursor-pointer duration-1000 hover:bg-(--primary-color) text-white p-3 rounded-full rounded-bl-none shadow-lg transition"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
