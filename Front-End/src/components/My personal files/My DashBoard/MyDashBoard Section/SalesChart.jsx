//import CHART_DATA Data
import { CHART_DATA } from "../../../../Data/DashboardData";

//import recharts
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

//import framer-motion
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } },
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function SalesChart() {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: 24,
        border: "1px solid #e2e8f0",
        flex: 1,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <h2
          style={{ margin: 0, fontSize: 18, fontWeight: 700 }}
          className="text-(--primary-color)"
        >
          Sales Chart
        </h2>

        {/*  */}

        <div style={{ display: "flex", gap: 16 }}>
          <LegendDot color={"#ff6200"} label="Bookings" />

          {/*  */}

          <LegendDot color="red" label="Revenue" />
        </div>
      </div>

      {/* ////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////// */}

      {/* Chart */}
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={CHART_DATA}>
          <defs>
            <linearGradient id="gradBookings" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="#ff6200" stopOpacity={0.2} />
              <stop offset="60%" stopColor="#ff6200" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gradRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="red" stopOpacity={0.2} />
              <stop offset="60%" stopColor="red" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="time" tick={{ fontSize: 11, fill: "#94a3b8" }} />
          <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} />
          <Tooltip
            contentStyle={{
              borderRadius: 10,
              border: "1px solid #e2e8f0",
              fontSize: 13,
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          />
          <Area
            type="monotone"
            dataKey="bookings"
            stroke="#ff6200"
            strokeWidth={2.5}
            fill="url(#gradBookings)"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="red"
            strokeWidth={2.5}
            fill="url(#gradRevenue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function LegendDot({ color, label }) {
  return (
    <span
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontSize: 12,
        color: "#64748b",
      }}
    >
      <span
        style={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: color,
          display: "inline-block",
        }}
      />
      {label}
    </span>
  );
}
