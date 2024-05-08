import { ReactNode } from "react";
import Header from "../components/Header/Header";
import HomeEditingContextProvider from "./HomeEditingContextProvider";
import UserProfileContextProvider from "./UserProfileContextProvider";

interface Props {
  children: ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <div className="w-full h-full p-6 mb-[100px]">
      <Header></Header>
      <div className="mt-6 h-full">
        <div className="flex gap-6 h-full w-full">
          <UserProfileContextProvider>
            <HomeEditingContextProvider>{children}</HomeEditingContextProvider>
          </UserProfileContextProvider>
        </div>
      </div>
    </div>
  );
};

export default layout;
