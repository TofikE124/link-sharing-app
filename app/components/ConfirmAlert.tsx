"use client";

import { Options } from "./providers/ConfirmAlertContextProvider";

interface Props {
  options: Options;
  isHidden: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmAlert = ({ options, isHidden, onCancel, onConfirm }: Props) => {
  return (
    <>
      <div
        className={`confirm-alert fixed z-50 inset-0 w-screen h-screen flex justify-center items-center ${
          isHidden ? "" : "shown"
        }`}
      >
        <div className="relative z-10 bg-white rounded-b-xl overflow-hidden min-w-[650px]">
          <div className="flex flex-col gap-3 p-6 pb-4 border-0 border-t-4 border-t-purple-600 500 border-b border-solid border-gray-300">
            <h3 className="heading-s">{options.title}</h3>
            <p className="body-m">{options.message}</p>
          </div>
          <div className="flex justify-end gap-4 p-6">
            <button
              className="button-secondary min-w-[150px] max-w-[250px]"
              onClick={onCancel}
            >
              {options.cancelLabel}
            </button>
            <button
              className="button-primary min-w-[150px] max-w-[250px]"
              onClick={onConfirm}
            >
              {options.confirmLabel}
            </button>
          </div>
        </div>
        <div className="absolute bg-black opacity-40 w-full h-full"></div>
      </div>
    </>
  );
};

export default ConfirmAlert;
