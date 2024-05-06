import React, { PropsWithChildren, useRef, useState, useEffect } from 'react';
import Button from '@/components/Button';
import { FaChevronUp } from 'react-icons/fa6';

type ExpandableCardProps = {
  expanded: boolean;
  trigger?: string;
  onClose: () => void;
};

const ExpandableCard: React.FC<PropsWithChildren<ExpandableCardProps>> = ({
  children,
  expanded,
  trigger,
  onClose,
}) => {
  const [height, setHeight] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setHeight(expanded ? containerRef.current?.scrollHeight || 0 : 0);
  }, [expanded, trigger]);

  useEffect(() => {
    const handleResize = () => {
      setHeight(expanded ? containerRef.current?.scrollHeight || 0 : 0);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <div
      ref={containerRef}
      className="h-full overflow-hidden px-content transition-all duration-300"
      style={{ maxHeight: height + 1 }}
    >
      {children}
      <Button
        label="Close"
        color="secondary"
        variant="text"
        className="ml-auto mt-2 w-max"
        icon={<FaChevronUp />}
        onClick={onClose}
      />
    </div>
  );
};

export default ExpandableCard;
