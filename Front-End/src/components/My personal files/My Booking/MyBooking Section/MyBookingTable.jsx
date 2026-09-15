//import framer-motion
import { motion } from "framer-motion";

//import Component NEW
import NewActionMyBooking from "./NEW My Booking/NewActionMyBooking";

export default function MyBookingTable({
  visibleData,
  statusStyle,
  setViewItem,
  setCancelItem,
  STATUS_CONFIG,
}) {
  const HeaderData = [
    "No",
    "Booking ID",
    "Type",
    "Date",
    "Price",
    "Status",
    "Action",
  ];

  return (
    <table className="w-full min-w-[850px]">
      <thead>
        <tr className="border-b border-red-300 text-left">
          {HeaderData.map((item, index) => (
            <th key={index} className="pb-4 last:text-center">
              {item}
            </th>
          ))}
        </tr>
      </thead>

      {/* /////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////// */}

      <tbody>
        {visibleData.map((item, index) => (
          <motion.tr
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 10, y: 0 }}
            transition={{ duration: 1 }}
            className="border-b border-black/20 font-semibold"
          >
            <td className="py-4 text-(--primary-color2) text-xl font-bold">
              {index + 1}
            </td>

            {/* /////////////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////////// */}

            <td className="py-4  text-(--primary-color)">{item.id}</td>

            {/* /////////////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////////// */}

            <td className="py-4">{item.type}</td>

            {/* /////////////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////////// */}

            <td className="py-4">{item.date}</td>

            {/* /////////////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////////// */}

            <td className="py-4">{item.price}</td>

            {/* /////////////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////////// */}

            <td className="py-4">
              <span
                className={`px-2.5 py-1 font-bold shadow-lg shadow-black/10 rounded-full text-sm ${statusStyle[item.status]}`}
              >
                {item.status}
              </span>
            </td>

            {/* /////////////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////////// */}

            <td className="py-4">
              <NewActionMyBooking
                booking={item}
                setViewItem={setViewItem}
                setCancelItem={setCancelItem}
              />
            </td>
          </motion.tr>
        ))}
      </tbody>
    </table>
  );
}
