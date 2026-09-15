//import NOTIFICATIONS Data
import { NOTIFICATIONS } from "../../../../Data/DashboardData";

//import framer-motion
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.35 },
  }),
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function NotificationsPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 13, y: 0 }}
      transition={{ delay: 0.4, duration: 1 }}
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: 20,
        border: "1px solid #e2e8f0",
        width: 300,
        flexShrink: 0,
      }}
    >
      <h2
        style={{
          margin: "0 0 16px",
          fontSize: 17,
        }}
        className="text-(--primary-color) font-bold"
      >
        Notifications
      </h2>

      {/*  */}

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {NOTIFICATIONS.map((notif, i) => (
          <NotifItem key={notif.id} notif={notif} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function NotifItem({ notif, index }) {
  return (
    <motion.div
      custom={index}
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      whileHover={{ x: 10, background: "#f8fafc" }}
      transition={{ duration: 0.5 }}
      style={{
        display: "flex",
        gap: 12,
        padding: "10px 10px",
        borderRadius: 10,
        cursor: "pointer",
        transition: "background 0.15s",
      }}
    >
      {/* Icon Circle */}
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: notif.color + "22",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <notif.icon style={{ color: notif.color, fontSize: 18 }} />
      </div>

      {/*  */}

      {/* Text */}
      <div style={{ flex: 1 }}>
        <p
          style={{
            margin: "0 0 2px",
            fontSize: 13,
            color: "#0c2c7a",
            fontWeight: 700,
            lineHeight: 1.5,
          }}
        >
          {notif.title}
        </p>

        {/*  */}

        <p style={{ margin: 0, fontSize: 12, color: "#94a3b8" }}>
          {notif.time}
        </p>
      </div>
    </motion.div>
  );
}
