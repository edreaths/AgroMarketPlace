import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
      {children}
    </span>
  );
}

export default Badge;