import React, { ReactNode } from "react";
import Header from "../components/Header";
import IllustrationPhoneMockUp from "./IllustrationPhoneMockup";
import PlatformEditingContextProvider from "./links/PlatformEditingContextProvider";
import ProfileEditingContextProvider from "./profile-details/ProfileEditingContextProvider";

interface Props {
  children: ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <div className="w-full h-full p-6 mb-[100px]">
      <Header></Header>
      <div className="mt-6 h-full">
        <div className="flex gap-6 h-full w-full">
          <PlatformEditingContextProvider>
            <ProfileEditingContextProvider>
              <IllustrationPhoneMockUp></IllustrationPhoneMockUp>
              <div className="grow-[2]">{children}</div>
            </ProfileEditingContextProvider>
          </PlatformEditingContextProvider>
        </div>
      </div>
    </div>
  );
};

export default layout;
