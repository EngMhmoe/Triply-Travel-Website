//import Components UI
import TopBar from "../../../../UI/My personal files/Container NEW IS Header With ALL Page/TopBar";
import TableBookings from "../../../../UI/My personal files/TableBookings";

//import UseUserDataStore
import { useUserDataStore } from "../../../../Store/useUserDataStore";

export default function MyBookingHistorySection() {
  //(1) Data User == FullUserName && Email
  const { userData } = useUserDataStore();

  return (
    <main
      style={{
        flex: 1,
        padding: "28px 20px",
        overflowX: "hidden",
      }}
      className="bg-[#ecf5fc] rounded-[40px] border border-orange-200"
    >
      {/* ── Top Bar ────────────────────────────────────────────── */}
      <section style={{ marginBottom: 28 }}>
        <TopBar mainText={"My Booking History"} userData={userData} />
      </section>

      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* ── Recent Bookings Table ──────────────────────────────── */}
      <TableBookings condition={"MyBookingHistory"} />
    </main>
  );
}
