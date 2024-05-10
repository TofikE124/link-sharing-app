"use client";
import { createContext, PropsWithChildren, useState } from "react";
import ConfirmAlert from "../ConfirmAlert";

export interface Options {
  title: string;
  message: string;
  confirmLabel: string;
  cancelLabel: string;
}

interface ConfirmAlertContextType {
  confirm: (options: Options) => Promise<boolean>;
}

export const ConfirmAlertContext = createContext<ConfirmAlertContextType>(
  {} as ConfirmAlertContextType
);

const ConfirmAlertContextProvider = ({ children }: PropsWithChildren) => {
  const [options, setOptions] = useState({} as Options);
  const [isHidden, setHidden] = useState(true);
  const [resolveFunction, setResolveFunction] = useState<
    ((value: boolean) => void) | null
  >(null);

  const confirm = (options: Options) => {
    setOptions(options);
    setHidden(false);
    return new Promise<boolean>((resolve) => {
      setResolveFunction(() => resolve);
    });
  };

  const onConfirm = () => {
    if (resolveFunction) {
      resolveFunction(true);
    }
    setHidden(true);
  };

  const onCancel = () => {
    if (resolveFunction) {
      resolveFunction(false);
    }
    setHidden(true);
  };

  const confirmAlertContextValue: ConfirmAlertContextType = { confirm };

  return (
    <>
      <ConfirmAlert
        isHidden={isHidden}
        onCancel={onCancel}
        onConfirm={onConfirm}
        options={options}
      ></ConfirmAlert>
      <ConfirmAlertContext.Provider value={confirmAlertContextValue}>
        {children}
      </ConfirmAlertContext.Provider>
    </>
  );
};

export default ConfirmAlertContextProvider;
