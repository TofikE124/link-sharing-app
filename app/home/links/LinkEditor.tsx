import { useContext } from "react";
import { iconType } from "../../constants/icons";
import { Link } from "../../constants/links";
import { PlatformType } from "../../constants/platforms";
import MenuDropdown from "../../components/Menu/MenuDropdown";
import TextField from "../../components/TextField";
import { DragControls } from "framer-motion";
import { LinkEditingContext } from "./LinkEditingContextProvider";

interface Props {
  link: Link;
  index: number;
  controls: DragControls;
}

const LinkEditor = ({ link, index, controls }: Props) => {
  const { handleLinkRemove, handleLinkValueChange, handlePlatformChange } =
    useContext(LinkEditingContext);
  return (
    <div className="bg-light-grey rounded-xl p-5 flex flex-col gap-3 select-none">
      <div className="flex justify-between">
        <div
          className="flex gap-2 items-center p-2 cursor-grab"
          onPointerDown={(e) => controls.start(e)}
        >
          <div className="h-fit">
            <img
              src="/assets/images/icon-drag-and-drop.svg"
              className="select-none"
              draggable={false}
            />
          </div>
          <p className="text-grey body-m font-bold">Link #{index + 1}</p>
        </div>
        <div
          className="body-m text-grey cursor-pointer"
          onClick={() => handleLinkRemove(link.id)}
        >
          Remove
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="body-s text-dark-grey">Platform</p>
        <MenuDropdown
          onChange={(platformType: PlatformType) =>
            handlePlatformChange(platformType, link.id)
          }
          link={link}
        ></MenuDropdown>
      </div>
      <div className="flex flex-col gap-1">
        <p className="body-s text-dark-grey">Link</p>
        <TextField
          onChange={(value: string) => handleLinkValueChange(value, link.id)}
          iconType={iconType.LINK}
          placeholder="e.g. https://www.github.com/johnappleseed"
          defaultValue={link.link}
        ></TextField>
      </div>
    </div>
  );
};

export default LinkEditor;
