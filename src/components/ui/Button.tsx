"use client"

import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "solid";
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({ variant = "solid", size = "md", className, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantStyles = variant === "outline" ? "border border-gray-300 bg-white text-gray-700" : "bg-indigo-600 text-white";
  const sizeStyles = size === "sm" ? "px-2.5 py-1.5 text-xs" : size === "lg" ? "px-4 py-2 text-sm" : "px-3 py-1.5 text-sm";

  return (
    <button className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`} {...props} />
  );
};
