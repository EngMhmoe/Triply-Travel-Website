import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const FooterLogo = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">Tripelo</h2>

      <p className="text-gray-300 mb-6">
        Explore the world with Tripelo. Discover amazing tours, book hotels, and
        plan unforgettable travel experiences.
      </p>

      <div className="space-y-3 text-gray-300">
        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-green-400" />
          +20 123 456 789
        </div>

        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-green-400" />
          Cairo, Egypt
        </div>

        <div className="flex items-center gap-3">
          <FaEnvelope className="text-green-400" />
          support@tripelo.com
        </div>
      </div>
    </div>
  );
};

export default FooterLogo;
