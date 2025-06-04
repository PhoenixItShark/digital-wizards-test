"use client";

import { InputProps } from "@/lib";
import { cn } from "@/lib/util/cn";
import React from "react";

const Input: React.FC<InputProps> = ({
  title,
  width,
  type,
  id,
  required,
  value,
  onChange,
  register,
}) => {
  return (
    <div className='w-full relative flex-grow block lg:block'>
      <input
        required={required}
        id={id}
        type={type ? type : "text"}
        placeholder={title}
        value={value}
        onChange={onChange}
        {...register}
        className={`text-sm font-medium text-white/80 w-full pl-5 pr-4 py-2 rounded-lg outline-none bg-dark4 transition-all hover:ring-2 hover:ring-blue-500 hover:outline-none`}
        style={{ width: width }}
      />
    </div>
  );
};
export default Input;
