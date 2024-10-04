import React from "react";

export default function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      width="8"
      height="12"
      className={className}
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
