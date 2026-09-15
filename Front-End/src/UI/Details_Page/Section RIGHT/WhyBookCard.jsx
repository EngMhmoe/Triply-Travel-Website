import { motion } from "framer-motion";

export default function WhyBookCard() {
  const items = [
    "Best Price Guarantee",
    "24/7 Customer Support",
    "Handpicked Luxury Experiences",
    "Secure Booking System",
    "Expert Local Guides",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 10, y: 0 }}
      transition={{ duration: 4 }}
      className="bg-(--secondary-color) p-6 rounded-4xl shadow-lg shadow-red-200 border-2 border-black/5 space-y-5"
    >
      <h3 className="text-(--primary-color) text-2xl font-bold">
        Why Book With Us?
      </h3>

      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="flex gap-2">
            <span>🟢</span>
            <span className="font-semibold">{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
