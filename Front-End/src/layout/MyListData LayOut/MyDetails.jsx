//import React icons
import { CiCamera } from "react-icons/ci";

//import UseUserDataStore Store
// import { UseUserDataStore } from "../../Store/useUserDataStore";

//import getInitialsUserName services
import getInitialsUserName from "../../services/APIs/getInitialsUserName";
import { useUserDataStore } from "../../Store/useUserDataStore";

export default function MyDetails() {
  //UseUserDataStore
  const { userData, setUserData } = useUserDataStore();

  //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////

  //formatUserName
  const formatUserName = getInitialsUserName(userData.username);

  //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////

  // const [image, setImage] = useState(userData.image);

  //Function handleImage
  const handleImage = (e) => {
    const file = e.target.files[0];

    //+++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++

    if (file) {
      const resultFile = URL.createObjectURL(file);

      //+++++++++++++++++++++++++++++++++++++++
      //+++++++++++++++++++++++++++++++++++++++

      // setImage(resultFile);

      const UpdateUserData = {
        ...userData,

        image: resultFile,
      };

      //+++++++++++++++++++++++++++++++++++++++
      //+++++++++++++++++++++++++++++++++++++++

      setUserData(UpdateUserData);
    }
  };

  // useEffect(() => {}, [userData.image]);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <section className="flex flex-col justify-start items-center gap-4 px-4">
      {/* img */}
      <section className="relative">
        {userData?.image === "" && (
          <div
            className="w-20 h-20 rounded-full flex-shrink-0 overflow-hidden bg-(--primary-pera)
                      flex items-center justify-center text-white font-semibold text-xl"
          >
            <img
              src={userData?.username}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />

            {/* /////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////// */}

            <span className="text-2xl font-bold">{formatUserName}</span>
          </div>
        )}

        {/* /////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////// */}

        {userData?.image && (
          <img
            src={userData?.image}
            className="w-30 h-30 object-cover rounded-full"
          />
        )}

        {/* ///////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////// */}

        <label
          htmlFor="GetImg"
          className={`absolute ${userData.image === "" ? "-bottom-1" : "bottom-1"}  right-1 cursor-pointer hover:bg-(--primary-pera) bg-(--primary-color2) duration-1000 p-1.5 rounded-full text-lg`}
        >
          <CiCamera />
          {/* ///////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////// */}
          <input
            accept="image/*"
            onChange={handleImage}
            id="GetImg"
            type="file"
            className="w-[0.01px] absolute top-0"
          />
        </label>
      </section>

      {/* ///////////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////////// */}

      {/* Name & Email */}
      <section className="flex flex-col gap-1 text-center">
        <h1 className="text-xl capitalize font-semibold">
          {userData.username}
        </h1>
        {/* ///////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////// */}
        <p className="text-sm text-white/90">{userData.email}</p>
      </section>
    </section>
  );
}
