import React, { PropsWithChildren, useRef } from "react";

type ExpandableCardProps = {
  expanded: boolean;
};

const ExpandableCard: React.FC<PropsWithChildren<ExpandableCardProps>> = ({
  children,
  expanded,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden transition-all duration-300"
      style={{ height: expanded ? containerRef.current?.scrollHeight : 0 }}
    >
      {children}
    </div>
  );
};

export default ExpandableCard;
