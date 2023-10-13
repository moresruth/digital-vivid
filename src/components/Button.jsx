import React from "react";

const Button = ({ title }) => {
  return (
    <button
      type="button"
      className="bg-button-gradient font-poppins  font-semibold text-primary  outline-none  shadow-lg bg-gray-100  m-2 p-[10px] cursor-pointer hover:shadow-violet-900  "
    >
      {title}
    </button>
  );
};

export default Button;
