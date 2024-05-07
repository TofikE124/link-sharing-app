"use client";
import { useContext } from "react";
import IllustrationEmpty from "./IllustrationEmpty";
import { PlatformEditingContext } from "./PlatformEditingContextProvider";
import PlatformsList from "./PlatformsList";
import LoadingSkeleton from "@/app/components/LoadingSkeleton";
import LinksLoadingSkeleton from "./LinksLoadingSkeleton";

const page = () => {
  const {
    platforms,
    allPlatformsTaken,
    handleReorder,
    appendPlatform,
    handleSubmit,
    onSubmit,
    isLoading,
  } = useContext(PlatformEditingContext);

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
        {isLoading ? (
          <LinksLoadingSkeleton />
        ) : platforms.length ? (
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
