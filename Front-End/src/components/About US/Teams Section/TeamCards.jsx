//import Translation
import { useTranslation } from "react-i18next";

//import React Icons
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

//import APIs
import { BASE_URL } from "../../../services/APIs/server_URL";
import FadeUpMotion from "../../../UI/FreeMotions/FadeUpMotion";

export default function TeamCards({ Data_TeamSection }) {
  //Translation
  const { t } = useTranslation();

  /*===========================================================================
  Start Classes
  =============================================================================*/
  const classes = {
    Wrapper:
      "capitalize grid sm:grid-cols-2 xl:grid-cols-4 justify-items-center gap-x-10 gap-y-15 mt-20",

    Card: "text-center group transition duration-1000",

    ImageWrapper: "relative w-70 h-70 mx-auto",

    Image:
      "w-full h-full object-cover rounded-full border-4 border-white shadow-lg group-hover:scale-105 transition duration-1000",

    Info: "bg-white shadow-lg border w-full border-black/5 rounded-full py-4 px-7 relative flex justify-between items-center",

    Content: "flex flex-col text-start",

    Name: "text-xl text-(--primary-pera) font-bold",

    Role: "text-(--primary-color) font-semibold text-md mt-1",

    Fab: "fab absolute top-0",

    FabButton:
      "btn btn-lg btn-circle btn-success bg-(--primary-color) border-0 text-white shadow shadow-white hover:bg-(--primary-pera) duration-1000 group-hover:bg-(--primary-pera)",

    SocialButton:
      "btn btn-lg btn-circle bg-(--primary-color) text-white hover:bg-(--primary-pera) duration-1000 border-0",
  };

  return (
    <div className={classes.Wrapper}>
      {Data_TeamSection.map((member) => (
        <FadeUpMotion key={member?.documentId} className={classes.Card}>
          {/* Image */}
          <div className={classes.ImageWrapper}>
            <img
              src={`${BASE_URL}${member.image?.url}`}
              alt={member.name}
              className={classes.Image}
            />
          </div>

          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

          {/* Info */}
          <div className={classes.Info}>
            <div className={classes.Content}>
              <h3 className={classes.Name}>{t(member.name.toLowerCase())}</h3>

              {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
              {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

              <p className={classes.Role}>{t(member.role.toLowerCase())}</p>
            </div>

            {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
            {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

            <div className={classes.Fab}>
              <div tabIndex={1} className={classes.FabButton}>
                T
              </div>

              {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
              {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

              {member?.Social?.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className={classes.SocialButton}>
                    {social.title === "facebook" && <FaFacebookF />}
                    {social.title === "twitter" && <FaTwitter />}
                    {social.title === "linkedinIn" && <FaLinkedinIn />}
                    {social.title === "instagram" && <FaInstagram />}
                  </button>
                </a>
              ))}
            </div>
          </div>
        </FadeUpMotion>
      ))}
    </div>
  );
}
