import { ReactNode } from "react";
import Header from "../components/Header/Header";
import HomeEditingContextProvider from "./HomeEditingContextProvider";
import UserProfileContextProvider from "./UserProfileContextProvider";
import IllustrationPhoneMockUp from "../components/IllustrationPhoneMockup/IllustrationPhoneMockup";

interface Props {
  children: ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <UserProfileContextProvider>
      <HomeEditingContextProvider>
        <div className="w-full h-full p-6 mb-[100px]">
          <Header></Header>
          <div className="mt-6 h-full">
            <div className="flex gap-6 h-full w-full">
              <div className="grow mdsm:hidden">
                <IllustrationPhoneMockUp></IllustrationPhoneMockUp>
              </div>
              <div className="grow-[2] max-w-[1000px]">{children}</div>
            </div>
          </div>
        </div>
      </HomeEditingContextProvider>
    </UserProfileContextProvider>
  );
};

export default layout;
