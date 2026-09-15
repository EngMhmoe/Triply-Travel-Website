//import react-icons
import { FaQuoteRight, FaStar } from "react-icons/fa";

//import Translation
import { useTranslation } from "react-i18next";

//import Components UI
import FadeUpMotion from "../../../UI/FreeMotions/FadeUpMotion";

//import APIs
import { BASE_URL } from "../../../services/APIs/server_URL";

export default function TestimonialCard({ data }) {
  //Translation
  const { t, i18n } = useTranslation();

  /*===========================================================================
  Start Classes
  =============================================================================*/
  const classes = {
    Card: "capitalize group bg-white xl:rounded-full lg:rounded-4xl sm:rounded-full rounded-4xl overflow-hidden sm:p-8 p-3 flex xl:flex-row lg:flex-col sm:flex-row flex-col justify-center items-center gap-6 xl:items-star shadow-xl relative",

    Line: `xl:flex lg:hidden sm:flex hidden absolute left-6 top-1/2 -translate-y-1/2 w-1 h-20 bg-(--primary-color) rounded-full
           transition-all duration-1000
           group-hover:h-30 group-hover:bg-(--primary-pera)`,

    Image: "w-60 h-40  rounded-full object-cove",

    Content:
      "text-(--primary-pera) flex flex-col justify-center sm:items-start items-center sm:text-start text-center w-full",

    Name: "font-bold text-(--primary-color) group-hover:text-(--primary-color2) duration-1000 text-2xl",

    Role: "text-md font-semibold",

    Description: "mt-3 text-sm leading-relaxed",

    Stars:
      "flex gap-1 mt-4 text-(--primary-color2) group-hover:text-(--primary-color) duration-1000",

    Quote: `sm:flex hidden absolute top-6 text-(--primary-color) text-3xl ${
      i18n.language === "ar" ? "left-15" : "right-15"
    }`,
  };

  return (
    <FadeUpMotion>
      <div dir={i18n.language === "ar" && "rtl"} className={classes.Card}>
        {/* Moving Line */}
        <span className={classes.Line}></span>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Image */}
        <img
          src={`${BASE_URL}${data.image?.url}`}
          alt={data.name}
          className={classes.Image}
        />

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Content */}
        <div className={classes.Content}>
          <h3 className={classes.Name}>{t(data.name.toLowerCase())}</h3>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <p className={classes.Role}>{t(data.role.toLowerCase())}</p>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <p className={classes.Description}>{t(data.text.toLowerCase())}</p>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          {/* Stars */}
          <div className={classes.Stars}>
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
        </div>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Quote Icon */}
        <FaQuoteRight className={classes.Quote} />
      </div>
    </FadeUpMotion>
  );
}
