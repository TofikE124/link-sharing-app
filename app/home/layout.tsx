import React, { ReactNode } from "react";
import Header from "../components/Header";

interface Props {
  children: ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <div className="div-container p-6 h-screen w-screen flex flex-col mb-96">
      <Header></Header>
      {children}
    </div>
  );
};

export default layout;
