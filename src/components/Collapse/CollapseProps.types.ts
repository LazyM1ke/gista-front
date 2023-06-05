import React from "react";

interface CollapseProps {
  className?: string;
  title: string;
  children?: React.ReactNode;
  type: "section" | "subsection";
  editable?: boolean;
}

export default CollapseProps;
