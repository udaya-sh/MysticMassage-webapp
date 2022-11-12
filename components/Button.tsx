import React from "react";

interface Button {
  title: string;
  onClick?: () => void;
  width?: string;
  loading?: boolean;
  padding?: string;
  noIcon?: boolean;
}

export default function Button({
  title,
  onClick,
  width,
  loading,
  padding,
  noIcon,
}: Button) {
  return (
    <button
      className={`ease group relative z-30 box-border inline-flex ${
        width ? width : " w-auto"
      } ${padding} cursor-pointer
    items-center justify-center overflow-hidden rounded bg-transparent opacity-80  border border-white  
    px-8 py-3 text-[#E65728]   transition-all duration-200 focus:outline-none hover:opacity-100 `}
      onClick={onClick}
    >
      <span className="relative z-20 flex font-bold items-center ">
        {noIcon}
        {loading ? "Loading..." : title}
      </span>
    </button>
  );
}
