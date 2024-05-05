import Image from "next/image";
import React, { ChangeEvent } from "react";
import SmallIcon from "./SmallIcon";
import { iconMap, iconType } from "../constants/icons";

interface Props {
  defaultValue?: string;
  placeholder?: string;
  errorMessage?: string;
  iconType?: iconType;
  onChange?: (value: string) => void;
}

const TextField = ({
  placeholder,
  errorMessage,
  iconType,
  defaultValue,
  onChange = () => {},
}: Props) => {
  const Icon = iconType ? iconMap[iconType] : null;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="text-field-container flex items-center gap-3 w-full lgmd:max-w-[450px] sm:max-w-[300px]">
      <div>
        {Icon ? <SmallIcon icon={Icon} color="#737373"></SmallIcon> : null}
      </div>

      <input
        placeholder={placeholder}
        className="body-m text-dark-grey text-field w-full border-0 outline-none mr-auto"
        onChange={handleChange}
        defaultValue={defaultValue}
      ></input>
      <div className="error-message-container">
        <p className="error-message text-red">{errorMessage}</p>
      </div>
    </div>
  );
};

export default TextField;
