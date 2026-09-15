//import UseUserDataStore
import { useUserDataStore } from "../../../../Store/useUserDataStore";

export default function MyProfileUserData() {
  //(1) Data User == FullUserName && Email
  const { userData } = useUserDataStore() || [];

  const MyProfileUserData = [
    { name: "Full Name", Value: userData.username },
    { name: "Email", Value: userData.email },
    { name: "Phone Number", Value: userData.phoneNumber },
    { name: "Address", Value: userData.address },
    { name: "Join Date", Value: userData.joinDate },
  ];

  return (
    <section className="flex flex-col flex-wrap gap-6 w-full text-(--primary-pera)">
      {MyProfileUserData?.map((data, index) => (
        <section
          key={index}
          className="flex flex-wrap items-center justify-between"
        >
          <h1 className="text-lg font-semibold">{data.name}:</h1>
          {/* ////////////////////////////////////////////////////////// */}
          {/* ////////////////////////////////////////////////////////// */}
          <p className="">{data.Value}</p>
        </section>
      ))}
    </section>
  );
}
