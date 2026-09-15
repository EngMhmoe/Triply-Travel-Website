//Import Components UI
import TopBar from "../../../../UI/My personal files/Container NEW IS Header With ALL Page/TopBar";
import TableBookings from "../../../../UI/My personal files/TableBookings";

//import UseUserDataStore
import { useUserDataStore } from "../../../../Store/useUserDataStore";

export default function MyBookingSection() {
  //(1) Data User == FullUserName && Email
  const { userData } = useUserDataStore();

  return (
    <container>
      {/* ── Recent Bookings Table ──────────────────────────────── */}
      <section className="bg-[#f8fafc] text-(--primary-pera) rounded-[40px]  py-7 px-5 border-2 border-orange-200 overflow-hidden relative">
        {/* ── Top Bar ────────────────────────────────────────────── */}
        <section style={{ marginBottom: 40 }}>
          <TopBar mainText={"My Booking"} userData={userData} />
        </section>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* ── MY Bookings Table ──────────────────────────────── */}
        <TableBookings condition={"MyBooking"} />
      </section>
    </container>
  );
}
