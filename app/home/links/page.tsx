import React from "react";

const page = () => {
  return (
    <div className="mt-6 h-full">
      <div className="flex gap-6 h-full w-full">
        <div className="mdsm:hidden bg-pure-white grow-[1] rounded-xl h-full flex items-center justify-center">
          <img src="/assets/images/illustration-phone-mockup.svg" />
        </div>
        <div className="rounded-xl grow-[2] bg-pure-white h-fit">
          <div className="p-10">
            <h2 className="heading-m text-dark-grey">Customize your skills</h2>
            <p className="body-m text-grey mt-2">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
            <button className="button-secondary mt-10">+ Add new link</button>
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
                  Use the “Add new link” button to get started. Once you have
                  more than one link, you can reorder and edit them. We’re here
                  to help you share your profiles with everyone!
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-6 border-borders border-0 border-t w-full lgmd:pb-6 sm:p-4">
            <button className="button-primary lgmd:w-[91px] sm:w-full block ml-auto mr-6">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
