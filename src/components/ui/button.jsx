import React from "react";
import { cn } from "@/lib/utils";

const variants = {
  default: "bg-blue-500 text-white hover:bg-blue-400",
  outline: "border border-white/20 bg-transparent hover:bg-white/10",
};

export function Button({ className, variant = "default", type = "button", ...props }) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-50",
        variants[variant] || variants.default,
        className,
      )}
      {...props}
    />
  );
}
