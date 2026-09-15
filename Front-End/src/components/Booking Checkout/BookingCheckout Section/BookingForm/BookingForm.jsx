//import Components UI
import BookingHeader from "../../../../UI/Checkout_Page/BookingHeader";
import InputField from "../../../../UI/Checkout_Page/InputField";

//import Components NEW
import CountrySelect from "./CountrySelect";

//import React Icons
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCity,
  FaFlag,
  FaHashtag,
  FaBirthdayCake,
  FaCommentDots,
} from "react-icons/fa";

const BookingForm = ({ formData, handleChangeFormData }) => {
  return (
    <div className="bg-(--secondary-color) rounded-4xl shadow shadow-red-300 sm:p-6 p-4 space-y-7">
      {/* Header */}
      <BookingHeader
        title={"Reservation Details"}
        mainTitle={"Booking Personal Info"}
        dec={"Fill in your details carefully to complete your booking"}
      />

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      {/* First + Last Name */}
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 gap-3">
        <InputField
          type={"text"}
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChangeFormData}
          icon={<FaUser />}
          placeholder="Enter first name"
        />

        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}

        <InputField
          type={"text"}
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChangeFormData}
          icon={<FaUser />}
          placeholder="Enter last name"
        />
      </div>

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      {/* Email + Phone */}
      <div className="grid lg:grid-cols-2 gap-3">
        <InputField
          type={"email"}
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChangeFormData}
          icon={<FaEnvelope />}
          placeholder="example@email.com"
        />

        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}

        <InputField
          type={"number"}
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChangeFormData}
          icon={<FaPhoneAlt />}
          placeholder="+20 100 000 0000"
        />
      </div>

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      {/* Address */}
      <InputField
        type={"text"}
        label="Street Address"
        name="address"
        value={formData.address}
        onChange={handleChangeFormData}
        icon={<FaMapMarkerAlt />}
        placeholder="Enter your full address"
      />

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      {/* Country + Age */}
      <div className=" flex items-center flex-wrap justify-between gap-3">
        {/* CountrySelect ==> NO */}
        <CountrySelect
          value={formData.country}
          onChange={handleChangeFormData}
        />

        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}

        <section className="w-full">
          <InputField
            type={"number"}
            label="Age"
            name="age"
            value={formData.age}
            onChange={handleChangeFormData}
            icon={<FaBirthdayCake />}
            placeholder="Enter age"
          />
        </section>
      </div>

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      {/* City + State + Zip */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-3 gap-3">
        <InputField
          type={"text"}
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChangeFormData}
          icon={<FaCity />}
          placeholder="City"
        />

        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}

        <InputField
          type={"text"}
          label="State"
          name="state"
          value={formData.state}
          onChange={handleChangeFormData}
          icon={<FaFlag />}
          placeholder="State"
        />

        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}

        <InputField
          type={"number"}
          label="Zip Code"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChangeFormData}
          icon={<FaHashtag />}
          placeholder="Zip Code"
        />
      </div>

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      {/* Notes */}
      <div>
        <label className="font-semibold block mb-2">Additional Comment</label>

        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}

        <div className="relative">
          <FaCommentDots className="absolute top-4 left-4 text-(--primary-color) text-lg" />

          {/* //////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////// */}

          <textarea
            rows="5"
            name="comment"
            value={formData.comment}
            onChange={handleChangeFormData}
            placeholder="Write any special request..."
            className="w-full pl-10 pr-4 py-3 rounded-2xl border border-gray-400/20 shadow
          focus:outline-none focus:ring-2 focus:ring-(--primary-color) transition"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
