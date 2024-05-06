"use client";

import PreviewLink from "@/app/components/PreviewLink";
import { useContext } from "react";
import { LinkEditingContext } from "./links/LinkEditingContextProvider";
import { ProfileEditingContext } from "./profile-details/ProfileEditingContextProvider";

const IllustrationPhoneMockUp = () => {
  const { links } = useContext(LinkEditingContext);
  const { watch } = useContext(ProfileEditingContext);

  let firstName = watch("firstName");
  let lastName = watch("lastName");
  let contactEmail = watch("contactEmail");
  let profileImage = watch("profileImage");

  return (
    <div className="mdsm:hidden bg-pure-white grow-[1] rounded-xl flex items-center justify-center min-w-[308px] h-[850px]">
      <div className="relative h-fit w-fit">
        <img src="/assets/images/illustration-phone-mockup.svg" />
        <div className="centered-axis-x top-[63.5px]">
          <img className="w-[96px] h-[96px] rounded-full" src={profileImage} />
        </div>
        <div className="centered-axis-x top-[180px] w-[200px] text-center flex flex-col gap-5 bg-pure-white">
          <h3 className="text-dark-grey heading-s text-[18px]">
            {firstName} {lastName}
          </h3>
        </div>
        <div className="centered-axis-x top-[210px] w-[200px] text-center flex flex-col gap-5 bg-pure-white">
          <p className="text-grey body-m text-[14px]">{contactEmail}</p>
        </div>
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
