import { Platform } from "@/app/constants/platforms";
import { Reorder } from "framer-motion";
import PlatformEditorItem from "./PlatformEditorItem";

interface Props {
  platforms: Platform[];
  handleReorder: (newLinks: Platform[]) => void;
}

const PlatformsList = ({ platforms, handleReorder }: Props) => {
  return (
    <Reorder.Group
      values={platforms}
      onReorder={handleReorder}
      className="list-none p-0"
    >
      <div
        className="mt-6 flex flex-col gap-6
    "
      >
        {platforms.map((platform, index) => (
          <PlatformEditorItem
            platform={platform}
            index={index}
            key={platform.id}
          ></PlatformEditorItem>
        ))}
      </div>
    </Reorder.Group>
  );
};

export default PlatformsList;
