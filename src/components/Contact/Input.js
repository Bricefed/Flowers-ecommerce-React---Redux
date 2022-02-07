import React from "react";

export default function Input({ type, placeholder, name }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      id={name}
      className="inputs"
    />
  );
}
