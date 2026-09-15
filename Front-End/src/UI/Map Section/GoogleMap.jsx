const GoogleMap = ({ MapLocation }) => {
  return (
    <iframe
      className="w-full h-full"
      loading="lazy"
      src={`https://www.google.com/maps?q=${MapLocation}&z=${10}&output=embed`}
    ></iframe>
  );
};

export default GoogleMap;
