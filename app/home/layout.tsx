import React, { ReactNode } from "react";
import Header from "../components/Header";
import IllustrationPhoneMockUp from "./links/IllustrationPhoneMockup";
import LinkEditingContextProvider from "./links/LinkEditingContextProvider";

interface Props {
  children: ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <div className="w-full h-full p-6 mb-[100px]">
      <Header></Header>
      <div className="mt-6 h-full">
        <div className="flex gap-6 h-full w-full">
          <LinkEditingContextProvider>
            <IllustrationPhoneMockUp></IllustrationPhoneMockUp>
            <div className="grow-[2]">{children}</div>
          </LinkEditingContextProvider>
        </div>
      </div>
    </div>
  );
};

export default layout;
