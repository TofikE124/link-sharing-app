"use client";

import { useContext } from "react";
import { LinkEditingContext } from "./LinkEditingContextProvider";
import PreviewLink from "@/app/components/PreviewLink";

const IllustrationPhoneMockUp = () => {
  const { links } = useContext(LinkEditingContext);
  return (
    <div className="mdsm:hidden bg-pure-white grow-[1] rounded-xl flex items-center justify-center min-w-[308px] h-[850px]">
      <div className="relative h-fit w-fit">
        <img src="/assets/images/illustration-phone-mockup.svg" />
        <div className="centered-axis-x top-[278px] flex flex-col gap-5">
          {links.slice(0, 5).map((link) => (
            <PreviewLink linkType={link.platformType}></PreviewLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IllustrationPhoneMockUp;
