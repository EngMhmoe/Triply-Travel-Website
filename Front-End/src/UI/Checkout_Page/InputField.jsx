const InputField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  icon,
  placeholder,
}) => {
  return (
    <div>
      <label className="text-sm font-semibold block mb-2">{label}</label>

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      <div className="relative">
        {/* ICON */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-(--primary-color)">
          {icon}
        </div>

        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}

        {/* INPUT */}
        <input
          required
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 rounded-2xl border border-gray-400/20 shadow
          focus:outline-none focus:ring-2 focus:ring-(--primary-color) transition"
        />
      </div>
    </div>
  );
};

export default InputField;
