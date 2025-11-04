import React from "react";

function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
}) {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={name} className="font-medium text-gray-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
      />
    </div>
  );
}

export default InputField;
