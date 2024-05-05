import React from "react";

const IllustrationEmpty = () => {
  return (
    <div className="mt-[86px] bg-light-grey rounded-xl py-[62px] sm:px-5 flex justify-center items-center bg-">
      <div className="flex flex-col items-center text-center w-full max-w-[500px]">
        <img
          src="/assets/images/illustration-empty.svg"
          className="w-[250px] object-cover"
        />
        <h2 className="heading-m text-dark-grey mt-10">
          Let’s get you started
        </h2>
        <p className="body-m text-grey mt-6">
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We’re here to help you share
          your profiles with everyone!
        </p>
      </div>
    </div>
  );
};

export default IllustrationEmpty;
