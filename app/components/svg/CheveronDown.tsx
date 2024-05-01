import React from "react";

interface Props {
  fill?: string;
}

const CheveronDown = ({ fill }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="9"
      fill="none"
      viewBox="0 0 14 9"
    >
      <path stroke={fill} stroke-width="2" d="m1 1 6 6 6-6" />
    </svg>
  );
};

export default CheveronDown;
