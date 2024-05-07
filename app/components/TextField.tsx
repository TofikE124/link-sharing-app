import Image from "next/image";
import React, { ChangeEvent, forwardRef, InputHTMLAttributes } from "react";
import SmallIcon from "./SmallIcon";
import { iconMap, iconType } from "../constants/icons";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  errorMessage?: string;
  iconType?: iconType;
}

const TextField = forwardRef<HTMLInputElement, Props>(
  (
    {
      name,
      value,
      onChange,
      onBlur,
      placeholder,
      disabled,
      required,
      type,
      className,
      errorMessage,
      iconType,
      ...rest
    }: Props,
    ref
  ) => {
    const Icon = iconType ? iconMap[iconType] : null;

    return (
      <div
        className={`text-field-container ${
          errorMessage ? "error" : ""
        } flex items-center gap-3 w-full`}
      >
        <div>
          {Icon ? <SmallIcon icon={Icon} color="#737373"></SmallIcon> : null}
        </div>

        <input
          className="body-m text-dark-grey text-field w-full border-0 outline-none mr-auto "
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          type={type}
          ref={ref}
          {...rest}
        ></input>
        <div className="error-message-container max-w-[250px] whitespace-nowrap">
          <p className="error-message text-red body-m">{errorMessage}</p>
        </div>
      </div>
    );
  }
);

export default TextField;
