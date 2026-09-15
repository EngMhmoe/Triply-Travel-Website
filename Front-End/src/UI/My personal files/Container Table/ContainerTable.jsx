//import Components NEW UI
import BookingRow_Table from "./BookingRow_Table";
import EmptyState from "./EmptyState";

//import AnimatePresence IN framer-motion
import { AnimatePresence } from "framer-motion";

export default function ContainerTable({
  visibleData,
  setViewItem,
  setCancelItem,
  condition,
}) {
  const TH_STYLE = {
    padding: "12px 16px",
    fontSize: 13,
    fontWeight: 700,
    color: "#64748b",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    borderBottom: "2px solid #e2e8f0",
    textAlign: "left",
    background: "#f8fafc",
  };

  return (
    <container style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          {condition !== "My Listing" && (
            <tr>
              {[
                "No",
                "Booking ID",
                "Type",
                "Date",
                "Price",
                "Status",
                "Action",
              ].map((h) => (
                <th key={h} style={TH_STYLE}>
                  {h}
                </th>
              ))}
            </tr>
          )}

          {/* ///////////////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////////////// */}

          {condition === "My Listing" && (
            <tr>
              {[
                "Listing Info",
                "Type",
                "Date",
                "Price",
                "Status",
                "Action",
              ].map((h) => (
                <th key={h} style={TH_STYLE}>
                  {h}
                </th>
              ))}
            </tr>
          )}
        </thead>

        {/* /////////////////////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////////////////////// */}

        <tbody>
          <AnimatePresence mode="popLayout">
            {visibleData.length > 0 ? (
              visibleData.map((booking, i) => (
                <BookingRow_Table
                  index={i}
                  key={booking.id}
                  booking={booking}
                  setViewItem={setViewItem}
                  setCancelItem={setCancelItem}
                  condition={condition}
                />
              ))
            ) : (
              <EmptyState />
            )}
          </AnimatePresence>
        </tbody>
      </table>
    </container>
  );
}
