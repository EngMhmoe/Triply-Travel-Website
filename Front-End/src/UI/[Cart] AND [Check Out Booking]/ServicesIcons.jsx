import {
  FaBroom,
  FaCar,
  FaUtensils,
  FaShuttleVan,
  FaBed,
  FaMapMarkedAlt,
  FaUserTie,
  FaBus,
  FaSpa,
  FaSwimmingPool,
  FaWifi,
  FaParking,
  FaDumbbell,
  FaTv,
  FaSnowflake,
  FaCoffee,
  FaConciergeBell,
  FaCamera,
  FaTicketAlt,
  FaShieldAlt,
  FaTachometerAlt,
  FaPhoneAlt,
  FaMobileAlt,
  FaTimesCircle,
  FaGlobe,
  FaHotel,
  FaUmbrellaBeach,
  FaHorse,
  FaFire,
  FaDog,
  FaGlassCheers,
  FaBoxOpen,
  FaKey,
  FaShip,
  FaUtensils as FaFood,
  FaConciergeBell as FaService,
  FaChair,
  FaSearchLocation,
} from "react-icons/fa";
import {
  MdOutdoorGrill,
  MdFreeBreakfast,
  MdLocalLaundryService,
} from "react-icons/md";
import { GiCamel, GiDesert } from "react-icons/gi";
import { IoBoatSharp } from "react-icons/io5";
import { BiDrink } from "react-icons/bi";

// ============================================================
// الـ Map الرئيسي - كل service ليها icon + label
// ============================================================
const servicesMap = {
  // ========== Tours ==========
  Pickup: { icon: <FaShuttleVan />, label: "Airport Pickup" },
  "Airport Pickup": { icon: <FaShuttleVan />, label: "Airport Pickup" },
  Breakfast: { icon: <MdFreeBreakfast />, label: "Breakfast" },
  Guide: { icon: <FaUserTie />, label: "Tour Guide" },
  Transport: { icon: <FaBus />, label: "Transport" },
  "Hotel Stay": { icon: <FaHotel />, label: "Hotel Stay" },
  "Entry Tickets": { icon: <FaTicketAlt />, label: "Entry Tickets" },
  "Spa Access": { icon: <FaSpa />, label: "Spa Access" },

  // ========== Hotels - Facilities ==========
  wifi: { icon: <FaWifi />, label: "Free WiFi" },
  spa: { icon: <FaSpa />, label: "Spa" },
  pool: { icon: <FaSwimmingPool />, label: "Pool" },
  restaurant: { icon: <FaUtensils />, label: "Restaurant" },
  gym: { icon: <FaDumbbell />, label: "Gym" },
  tv: { icon: <FaTv />, label: "TV" },
  parking: { icon: <FaParking />, label: "Parking" },
  "air-condition": { icon: <FaSnowflake />, label: "AC" },
  air_condition: { icon: <FaSnowflake />, label: "AC" },
  coffee: { icon: <FaCoffee />, label: "Coffee" },
  fireplace: { icon: <FaFire />, label: "Fire Place" },
  locker: { icon: <FaKey />, label: "Lockers" },

  // ========== Hotels - Services ==========
  "private dinner": { icon: <MdOutdoorGrill />, label: "Private Dinner" },
  "airport pickup": { icon: <FaShuttleVan />, label: "Airport Pickup" },
  "room service": { icon: <FaConciergeBell />, label: "Room Service" },
  "spa treatment": { icon: <FaSpa />, label: "Spa Treatment" },
  "daily housekeeping": { icon: <FaBroom />, label: "Housekeeping" },
  "boat tours": { icon: <IoBoatSharp />, label: "Boat Tours" },
  "breakfast buffet": { icon: <MdFreeBreakfast />, label: "Breakfast Buffet" },
  "meeting rooms": { icon: <FaChair />, label: "Meeting Rooms" },
  "business lounge": { icon: <FaGlassCheers />, label: "Business Lounge" },
  "24/7 support": { icon: <FaPhoneAlt />, label: "24/7 Support" },
  "camel safari": { icon: <GiCamel />, label: "Camel Safari" },
  "desert tour": { icon: <GiDesert />, label: "Desert Tour" },
  "bonfire night": { icon: <FaFire />, label: "Bonfire Night" },
  "pickup service": { icon: <FaShuttleVan />, label: "Pickup Service" },
  "mountain tours": { icon: <FaSearchLocation />, label: "Mountain Tours" },
  "yoga classes": { icon: <FaSpa />, label: "Yoga Classes" },
  "spa therapy": { icon: <FaSpa />, label: "Spa Therapy" },
  "bike rental": { icon: <FaCar />, label: "Bike Rental" },
  "gondola experience": { icon: <IoBoatSharp />, label: "Gondola" },
  "breakfast in room": { icon: <MdFreeBreakfast />, label: "Room Breakfast" },
  "guided tours": { icon: <FaUserTie />, label: "Guided Tours" },
  "traditional breakfast": {
    icon: <MdFreeBreakfast />,
    label: "Local Breakfast",
  },
  "thai massage": { icon: <FaSpa />, label: "Thai Massage" },
  "hot springs": { icon: <FaUmbrellaBeach />, label: "Hot Springs" },
  "aurora tours": { icon: <FaCamera />, label: "Aurora Tours" },
  "private transport": { icon: <FaCar />, label: "Private Transport" },
  "laundry service": { icon: <MdLocalLaundryService />, label: "Laundry" },
  "shared kitchen": { icon: <FaUtensils />, label: "Shared Kitchen" },
  "self check-in": { icon: <FaKey />, label: "Self Check-In" },
  "boat rides": { icon: <IoBoatSharp />, label: "Boat Rides" },
  "jungle tours": { icon: <FaSearchLocation />, label: "Jungle Tours" },
  "safari tours": { icon: <FaSearchLocation />, label: "Safari Tours" },
  "campfire dinner": { icon: <FaFire />, label: "Campfire Dinner" },
  "guided wildlife trips": { icon: <FaUserTie />, label: "Wildlife Trips" },
  "vip transfer": { icon: <FaShuttleVan />, label: "VIP Transfer" },
  "private chef": { icon: <FaUtensils />, label: "Private Chef" },
  "private concierge": { icon: <FaConciergeBell />, label: "Concierge" },
  "luxury tours": { icon: <FaTicketAlt />, label: "Luxury Tours" },

  // ========== Transports ==========
  "Full Insurance": { icon: <FaShieldAlt />, label: "Insurance" },
  "Unlimited Mileage": { icon: <FaTachometerAlt />, label: "Unlimited KM" },
  "24/7 Road Assistance": { icon: <FaPhoneAlt />, label: "Road Assistance" },
  "GPS Navigation": { icon: <FaMapMarkedAlt />, label: "GPS" },
  "Mobile Charger": { icon: <FaMobileAlt />, label: "Mobile Charger" },
  "Free Cancellation": { icon: <FaTimesCircle />, label: "Free Cancel" },
  "Premium Insurance": { icon: <FaShieldAlt />, label: "Premium Insurance" },
  "Airport Delivery": { icon: <FaShuttleVan />, label: "Airport Delivery" },
  "Road Assistance": { icon: <FaPhoneAlt />, label: "Road Assistance" },
  "Insurance Included": { icon: <FaShieldAlt />, label: "Insurance" },
  "Off-Road Support": { icon: <FaCar />, label: "Off-Road Support" },
  "Flexible Return": { icon: <FaTimesCircle />, label: "Flexible Return" },

  // ========== Foods ==========
  "Dine In": { icon: <FaUtensils />, label: "Dine In" },
  "Delivery Available": { icon: <FaBus />, label: "Delivery" },
  Delivery: { icon: <FaBus />, label: "Delivery" },
  Takeaway: { icon: <FaBoxOpen />, label: "Takeaway" },
  "Online Reservation": { icon: <FaGlobe />, label: "Online Booking" },
  "Outdoor Seating": { icon: <FaChair />, label: "Outdoor Seating" },
  "Family Tables": { icon: <FaChair />, label: "Family Tables" },
  "Fresh Daily Preparation": { icon: <FaFire />, label: "Fresh Daily" },
  "Online Ordering": { icon: <FaGlobe />, label: "Online Order" },
  "Drive Through": { icon: <FaCar />, label: "Drive Through" },
  "Fast Preparation": { icon: <FaFire />, label: "Fast Prep" },
  "Street Pickup": { icon: <FaShuttleVan />, label: "Street Pickup" },
  "Breakfast Serving": { icon: <MdFreeBreakfast />, label: "Breakfast" },
  "Custom Toppings": { icon: <FaFood />, label: "Custom Toppings" },
  "Large Group Serving": { icon: <FaChair />, label: "Group Serving" },
  "Premium Packaging": { icon: <FaBoxOpen />, label: "Premium Pack" },

  // ========== Destinations ==========
  Hotels: { icon: <FaHotel />, label: "Hotels" },
  Restaurants: { icon: <FaUtensils />, label: "Restaurants" },
  "Airport Transfer": { icon: <FaShuttleVan />, label: "Airport Transfer" },
  "Tour Guide": { icon: <FaUserTie />, label: "Tour Guide" },
  Transportation: { icon: <FaBus />, label: "Transportation" },
  Activities: { icon: <FaTicketAlt />, label: "Activities" },
  "City Pass": { icon: <FaTicketAlt />, label: "City Pass" },
  "Luxury Activities": { icon: <FaSpa />, label: "Luxury Activities" },
  "Beach Activities": { icon: <FaUmbrellaBeach />, label: "Beach Activities" },
  "Adventure Activities": { icon: <FaSearchLocation />, label: "Adventure" },
  "Museum Booking": { icon: <FaCamera />, label: "Museum Booking" },
  "Island Tours": { icon: <IoBoatSharp />, label: "Island Tours" },
  "Water Activities": { icon: <FaSwimmingPool />, label: "Water Activities" },
  "Resort Booking": { icon: <FaHotel />, label: "Resort Booking" },
  "Historical Tours": { icon: <FaSearchLocation />, label: "History Tours" },
  "Activity Booking": { icon: <FaTicketAlt />, label: "Activity Booking" },
  "Local Activities": { icon: <FaSearchLocation />, label: "Local Activities" },
  "Boat Tours": { icon: <IoBoatSharp />, label: "Boat Tours" },
  "Travel Support": { icon: <FaPhoneAlt />, label: "Travel Support" },
  "24/7 Support": { icon: <FaPhoneAlt />, label: "24/7 Support" },
};

// ============================================================
// Component
// ============================================================
export default function ServicesIcons({ services = [] }) {
  return (
    <div className={`flex  gap-3 gap-y-5 mt-2   flex-wrap`}>
      {services.map((service, index) => {
        const found = servicesMap[service];

        // لو الـ service مش موجودة في الـ map، اعرضها بـ default icon
        if (!found) {
          return (
            <div
              key={index}
              className="flex items-center  gap-1 text-xs bg-red-200 border text-(--primary-color2) hover:bg-(--primary-color2) hover:text-white duration-300 px-2 py-1 font-semibold rounded-full"
            >
              <FaService /> {service}
            </div>
          );
        }

        return (
          <div
            key={index}
            className="flex items-center gap-1 text-xs bg-red-200 border text-(--primary-color2) hover:bg-(--primary-color2) hover:text-white duration-300 px-2 py-1 font-semibold rounded-full"
          >
            {found.icon} {found.label}
          </div>
        );
      })}
    </div>
  );
}
