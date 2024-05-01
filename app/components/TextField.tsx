import Image from "next/image";
import React from "react";

interface Props {
  placeholder?: string;
  errorMessage?: string;
}

const TextField = ({ placeholder, errorMessage }: Props) => {
  return (
    <div className="text-field-container flex items-center gap-3">
      <div>
        <Image
          alt="link icon"
          src="/assets/images/icon-link.svg"
          width={16}
          height={16}
        />
      </div>

      <input
        placeholder={placeholder}
        className="body-m text-dark-grey text-field border-0 outline-none mr-auto"
      ></input>
      <div className="error-message-container">
        <p className="error-message text-red">{errorMessage}</p>
      </div>
    </div>
  );
};

export default TextField;
