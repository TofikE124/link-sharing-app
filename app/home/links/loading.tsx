import PlatformsLoadingSkeleton from "./PlatformsLoadingSkeleton";

const Loading = () => {
  return (
    <div className="rounded-xl bg-pure-white h-fit">
      <div className="p-10">
        <h2 className="heading-m text-dark-grey">Customize your skills</h2>
        <p className="body-m text-grey mt-2">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        <button className="button-secondary mt-10" type="button">
          + Add new link
        </button>
        <PlatformsLoadingSkeleton />
      </div>
      <div className="mt-10 pt-6 border-borders border-0 border-t w-full lgmd:pb-6 sm:p-4">
        <button className="button-primary lgmd:w-[91px] sm:w-full block ml-auto mr-6">
          Save
        </button>
      </div>
    </div>
  );
};

export default Loading;
