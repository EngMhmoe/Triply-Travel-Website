/*====================================================================================================
Start Imports
====================================================================================================*/
//============================================================
// React
//============================================================
import { useState } from "react";

//============================================================
// Components NEW
//============================================================
import ViewModalImgInformation from "./ViewModalImgInformation";

//============================================================
// Store
//============================================================
import { useUserDataStore } from "../../../../Store/UseUserDataStore";

//============================================================
// Services
//============================================================
import getInitialsUserName from "../../../../services/APIs/getInitialsUserName";

//============================================================
// Motion
//============================================================
import { motion } from "motion/react";
/*====================================================================================================
End Imports
====================================================================================================*/

export default function MyInformationModel() {
  //==========================================================
  // isModalOpen
  //==========================================================
  const [isModalOpen, setIsModalOpen] = useState(false);

  //==========================================================
  // userData
  //==========================================================
  const { userData } = useUserDataStore();

  //==========================================================
  // Helpers
  //==========================================================
  const userInitials = getInitialsUserName(userData.username);

  //==========================================================
  // Styles
  //==========================================================
  const myInformationClasses = {
    wrapper: "dropdown dropdown-center dropdown-bottom",

    userButton: "flex cursor-pointer items-center gap-2",

    avatar:
      "avatar avatar-online avatar-placeholder rounded-full border-[2px] border-green-500",

    avatarContainer: "text-neutral-content w-10 rounded-full sm:w-12",

    placeholder: `
    flex
    h-20
    w-20
    flex-shrink-0
    items-center
    justify-center
    overflow-hidden
    rounded-full
    bg-(--primary-pera)
    text-xl
    font-semibold
    text-white
  `,

    image: "h-full w-full object-cover",
  };

  return (
    <div className={myInformationClasses.wrapper}>
      {/* User Avatar */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5 }}
        onClick={() => setIsModalOpen(true)}
        className={myInformationClasses.userButton}
      >
        <div className={myInformationClasses.avatar}>
          <div className={myInformationClasses.avatarContainer}>
            {!userData.image ? (
              <div className={myInformationClasses.placeholder}>
                <img
                  src={userData.username}
                  className={myInformationClasses.image}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />

                <span className="capitalize">{userInitials}</span>
              </div>
            ) : (
              <img src={userData.image} alt={userData.username} />
            )}
          </div>
        </div>
      </motion.div>

      {/* /////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////// */}

      {/* User Information Modal */}
      <ViewModalImgInformation
        ViewModalImgInformationValue={isModalOpen}
        setViewModalImgInformationValue={setIsModalOpen}
      />
    </div>
  );
}
