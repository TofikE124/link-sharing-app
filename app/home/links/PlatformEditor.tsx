import { Platform } from "@/app/constants/platforms";
import { motion, DragControls } from "framer-motion";
import { useContext } from "react";
import MenuDropdown from "../../components/Menu/MenuDropdown";
import TextField from "../../components/TextField";
import { iconType } from "../../constants/icons";
import { PlatformEditingContext } from "../../components/providers/PlatformEditingContextProvider";
import { PlatformType } from "@prisma/client";
import Image from "next/image";

interface Props {
  platform: Platform;
  index: number;
  controls: DragControls;
}

const PlatformEditor = ({ platform, index, controls }: Props) => {
  const { handlePlatformChange, removePlatform, register, errors } = useContext(
    PlatformEditingContext
  );

  return (
    <div className="bg-light-grey rounded-xl p-5 flex flex-col gap-3 select-none">
      <div className="flex justify-between">
        <div
          className="flex gap-2 items-center p-2 cursor-grab touch-none"
          onPointerDown={(e) => controls.start(e)}
        >
          <div className="h-fit">
            <Image
              src="/assets/images/icon-drag-and-drop.svg"
              alt="Icon drag"
              className="select-none"
              draggable={false}
              width={12}
              height={6}
            />
          </div>
          <p className="text-grey body-m font-bold">Link #{index + 1}</p>
        </div>
        <div
          className="body-m text-grey cursor-pointer"
          onClick={() => removePlatform(index)}
        >
          Remove
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="body-s text-dark-grey">Platform</p>
        <MenuDropdown
          onChange={(platformType: PlatformType) =>
            handlePlatformChange(index, platformType)
          }
          platform={platform}
        ></MenuDropdown>
      </div>
      <div className="flex flex-col gap-1">
        <p className="body-s text-dark-grey">Link</p>
        <TextField
          {...register(`platforms.${index}.link`)}
          iconType={iconType.LINK}
          placeholder="e.g. https://www.github.com/johnappleseed"
          errorMessage={(errors.platforms || [])[index]?.link?.message}
        ></TextField>
      </div>
    </div>
  );
};

export default PlatformEditor;
