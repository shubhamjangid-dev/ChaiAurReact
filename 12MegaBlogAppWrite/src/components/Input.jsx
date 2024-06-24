import React from "react";
import { useId, forwardRef } from "react";

const Input = forwardRef(function Input({ label, type = "text", className = "", ...props }, ref) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label
          className="block mb-1"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>

    //   <input className = {`ewer`} type = {type}></input>
  );
});

export default Input;
