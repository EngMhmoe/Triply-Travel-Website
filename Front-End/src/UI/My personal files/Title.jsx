export default function Title({ mainText = "", userData = {} }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <div className="flex flex-col gap-2">
        <h1 className="capitalize text-(--primary-color) sm:text-3xl text-[25px] font-bold text-shadow-lg text-shadow-blue-300">
          {mainText}
        </h1>

        {/*  */}

        <p className="md:text-lg">
          Welcome back, {userData.username.split(" ")[0]}
          <span className="text-xl">👋</span>
        </p>
      </div>
    </div>
  );
}
