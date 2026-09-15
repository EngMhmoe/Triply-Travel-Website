//import STAT_CARDS Data
import { STAT_CARDS } from "../../../../Data/DashboardData";

//import framer-motion
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function StatCard({ label, value, icon: Icon, color, bg, index }) {
  return (
    <motion.div
      custom={index}
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -10, boxShadow: `0 14px 30px ${color}30` }}
      transition={{ duration: 0.3 }}
      style={{
        background: bg,
        borderRadius: 20,
        padding: "20px 16px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        cursor: "default",
        transition: "box-shadow 0.25s",
      }}
    >
      <motion.div
        whileHover={{ rotate: 10, scale: 1.2 }}
        transition={{ duration: 0.5 }}
        style={{
          background: color,
          borderRadius: 12,
          width: 52,
          height: 52,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon style={{ color: "#fff", fontSize: 26 }} />
      </motion.div>

      {/* ////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////// */}

      <div>
        <p
          style={{ margin: 0, fontSize: 13 }}
          className="text-[#303844] font-bold"
        >
          {label}
        </p>

        {/* /////////////////////////////////////// */}
        {/* /////////////////////////////////////// */}

        <p
          style={{
            margin: "3px 0 0",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: "-0.5px",
          }}
          className="text-(--primary-color2)"
        >
          {value}
        </p>
      </div>
    </motion.div>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function StatCards() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 16,
        marginBottom: 28,
      }}
    >
      {STAT_CARDS.map((card, i) => (
        <StatCard key={card.label} {...card} index={i} />
      ))}
    </div>
  );
}
