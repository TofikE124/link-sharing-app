import React from "react";
import SmallIcon from "../SmallIcon";
import CheveronDown from "../svg/CheveronDown";
import { icon } from "@/app/constants/icons";

interface Props {
  label: string;
  icon: icon;
  toggleClick: () => void;
}

const DropdownToggle = ({ icon, label, toggleClick }: Props) => {
  return (
    <div
      onClick={toggleClick}
      className="flex gap-3 p-4 items-center relative z-10"
    >
      <SmallIcon icon={icon} color="#737373"></SmallIcon>
      <p className="body-m text-dark-grey">{label}</p>
      <div className="arrow ml-auto">
        <CheveronDown fill="#633CFF"></CheveronDown>
      </div>
    </div>
  );
};

export default DropdownToggle;
