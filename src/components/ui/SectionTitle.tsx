import type { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
}

function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="mb-10 text-center text-4xl font-bold text-gray-900">
      {children}
    </h2>
  );
}

export default SectionTitle;