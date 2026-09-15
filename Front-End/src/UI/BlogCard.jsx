//import Translation
import { useTranslation } from "react-i18next";

//import React Icons
import { FaUser, FaCommentDots, FaArrowRight } from "react-icons/fa";

//import APIs
import { BASE_URL } from "../services/APIs/server_URL";

//import Store
import { useDarkModeStore } from "../Store/useDarkModeStore";

export default function BlogCard({
  documentId,
  image,
  date,
  title,
  reviews,
  author,
  description,
  AddToDetailsPage,
}) {
  //Translation
  const { t } = useTranslation();

  //DarkMode
  const { DarkMode: darkMode } = useDarkModeStore();

  /*===========================================================================
  Start Classes
  =============================================================================*/
  const classes = {
    Card: "capitalize group bg-white rounded-[50px] shadow-lg overflow-hidden transition-all duration-1000 hover:shadow-2xl",

    ImageWrapper: "relative overflow-hidden rounded-t-[50px] rounded-br-[50px]",

    Image:
      "w-full h-64 object-cover transition-transform duration-1000 group-hover:scale-110",

    Badge:
      "absolute top-4 right-4 bg-linear-to-r from-(--primary-color2) to-(--primary-color) text-white text-xs font-bold px-3 py-1 rounded-full rounded-bl-none",

    Content: "p-6 space-y-4 font-semibold",

    Info: "flex items-center gap-6 text-(--primary-pera) text-sm",

    InfoItem: "flex items-center gap-2",

    InfoIcon: "text-(--primary-color)",

    Title: `text-lg font-semibold leading-snug group-hover:text-(--primary-color) transition-colors duration-800 ${
      darkMode ? "text-(--primary-pera)" : ""
    }`,

    Description: "mb-5 text-gray-500",

    Button:
      "capitalize cursor-pointer flex items-center gap-2 w-fit bg-(--primary-color2) text-white px-5 py-2 rounded-full text-sm transition-all duration-800 hover:bg-(--primary-pera)",

    ButtonIcon: "text-xs",
  };

  return (
    <div className={classes.Card}>
      {/* Image */}
      <div className={classes.ImageWrapper}>
        <img
          src={`${BASE_URL}${image?.url}`}
          alt={title}
          className={classes.Image}
        />

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Date Badge */}
        <span className={classes.Badge}>{t(date.toLowerCase())}</span>
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* Content */}
      <div className={classes.Content}>
        {/* Author & Comments */}
        <div className={classes.Info}>
          <span className={classes.InfoItem}>
            <FaUser className={classes.InfoIcon} />
            {t(author.toLowerCase())}
          </span>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <span className={classes.InfoItem}>
            <FaCommentDots className={classes.InfoIcon} />({t(reviews)}{" "}
            {t("Reviews".toLowerCase())})
          </span>
        </div>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Title */}
        <h3 className={classes.Title}>{t(title.toLowerCase())}</h3>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Description */}
        <p className={classes.Description}>{t(description.toLowerCase())}</p>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Button */}
        <button
          onClick={() => AddToDetailsPage(documentId)}
          className={classes.Button}
        >
          {t("Read More".toLowerCase())}

          <FaArrowRight className={classes.ButtonIcon} />
        </button>
      </div>
    </div>
  );
}
