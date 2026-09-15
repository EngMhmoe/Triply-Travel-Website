import {
  FaWifi,
  FaSwimmingPool,
  FaSpa,
  FaDumbbell,
  FaParking,
  FaUtensils,
  FaPlane,
  FaConciergeBell,
  FaBed,
  FaBath,
  FaGift,
  FaTv,
  FaSnowflake,
  FaCoffee,
  FaDoorOpen,
  FaLock,          // ✅ Security Vault FIX
  FaBuilding,
  FaDog,
  FaFire,
  FaGlassCheers,
  FaUmbrellaBeach,
  FaMountain,
  FaTree,
  FaBus,
  FaCarAlt
} from "react-icons/fa";

import { MdOutlineSecurity, MdBusinessCenter, MdRoomService , MdDirectionsBoat, MdOutlineFitnessCenter  } from "react-icons/md";

import { SiSafari } from "react-icons/si";

import { GrLounge } from "react-icons/gr";




export const iconsMap = {
  wifi: FaWifi,
  pool: FaSwimmingPool,
  spa: FaSpa,
  gym: FaDumbbell,
  parking: FaParking,
  restaurant: FaUtensils,
  transfer: FaPlane,
  room_service: FaConciergeBell,
  bed: FaBed,
  bath: FaBath,
  gift: FaGift,

  tv: FaTv,
  air_condition: FaSnowflake,
  coffee: FaCoffee,
  elevator: FaBuilding,
  doorman: FaDoorOpen,
  security_vault: FaLock,   // ✅ FIXED
  pets: FaDog,
  fireplace: FaFire,

  breakfast: FaUtensils,
  fridge: FaSnowflake,
  event: FaGlassCheers,

  beach: FaUmbrellaBeach,
  mountain: FaMountain,
  nature: FaTree,
  bus: FaBus,
  party: FaGlassCheers,
  vault: MdOutlineSecurity,
  business: MdBusinessCenter,
  meeting: MdRoomService,
  boat: MdDirectionsBoat,
  safari: SiSafari,
  security: MdOutlineSecurity,
  fire: FaFire,
  car: FaCarAlt,
  fitness: MdOutlineFitnessCenter ,
  concierge: FaConciergeBell ,
  lounge: GrLounge ,
  
};




//   FaWifi,
//   FaSwimmingPool,
//   FaSpa,
//   FaDumbbell,
//   FaParking,
//   FaUtensils,
//   FaPlane,
//   FaConciergeBell,
//   FaBed,
//   FaBath,
//   FaGift,
//   FaTv,
//   FaSnowflake,
//   FaCoffee,
//   FaDoorOpen,
//   FaLock,
//   FaBuilding,
//   FaDog,
//   FaFire,
//   FaGlassCheers,
//   FaUmbrellaBeach,
//   FaMountain,
//   FaTree,
//   FaBus,
// } from "react-icons/fa";

// export const iconsMap = {
//   // core
//   wifi: FaWifi,
//   pool: FaSwimmingPool,
//   spa: FaSpa,
//   gym: FaDumbbell,
//   parking: FaParking,
//   restaurant: FaUtensils,
//   transfer: FaPlane,
//   room_service: FaConciergeBell,
//   bed: FaBed,
//   bath: FaBath,
//   gift: FaGift,

//   // extras
//   tv: FaTv,
//   air_condition: FaSnowflake,
//   coffee: FaCoffee,
//   elevator: FaBuilding,
//   doorman: FaDoorOpen,
//   security_vault: FaLock,        // ✅ FIX
//   pets: FaDog,
//   fireplace: FaFire,

//   // replaced missing ones safely
//   breakfast: FaUtensils,         // ✅ FIX
//   fridge: FaSnowflake,           // ✅ FIX (cooling symbol)
//   event: FaGlassCheers,          // ✅ FIX

//   // themes
//   beach: FaUmbrellaBeach,
//   mountain: FaMountain,
//   nature: FaTree,
//   bus: FaBus,
//   party: FaGlassCheers,
// };