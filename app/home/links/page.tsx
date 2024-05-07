"use client";
import { warningToastOptions } from "@/app/constants/styles";
import axios from "axios";
import { useContext, useState } from "react";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";
import IllustrationEmpty from "./IllustrationEmpty";
import { PlatformEditingContext } from "./PlatformEditingContextProvider";
import PlatformsList from "./PlatformsList";

const page = () => {
  const [canSave, setCanSave] = useState(true);

  const {
    platforms,
    allPlatformsTaken,
    handleReorder,
    appendPlatform,
    handleSubmit,
  } = useContext(PlatformEditingContext);

  const onSubmit = async (data: FieldValues) => {
    if (!canSave) {
      toast.error("Please wait before saving again", {
        ...warningToastOptions,
        duration: 2500,
      });
      return;
    }
    const createPlatformsPromise = axios.post("/api/platform", data);
    await toast.promise(createPlatformsPromise, {
      error: "An error occured while saving",
      loading: "Saving...",
      success: "Saved successfully",
    });
    saveCountDown();
  };

  const saveCountDown = () => {
    setCanSave(false);
    setTimeout(() => {
      setCanSave(true);
    }, 3000);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl bg-pure-white h-fit"
    >
      <div className="p-10">
        <h2 className="heading-m text-dark-grey">Customize your skills</h2>
        <p className="body-m text-grey mt-2">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        <button
          disabled={allPlatformsTaken}
          className="button-secondary mt-10"
          onClick={appendPlatform}
          type="button"
        >
          + Add new link
        </button>
        {platforms.length ? (
          <PlatformsList
            links={platforms}
            handleReorder={(newPlatforms) => handleReorder(newPlatforms)}
          ></PlatformsList>
        ) : (
          <IllustrationEmpty></IllustrationEmpty>
        )}
      </div>
      <div className="mt-10 pt-6 border-borders border-0 border-t w-full lgmd:pb-6 sm:p-4">
        <button
          disabled={platforms.length == 0}
          className="button-primary lgmd:w-[91px] sm:w-full block ml-auto mr-6"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default page;
