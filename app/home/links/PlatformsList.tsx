import { Platform } from "@/app/constants/platforms";
import { Reorder } from "framer-motion";
import PlatformEditorItem from "./PlatformEditorItem";
import { useRef } from "react";

interface Props {
  platforms: Platform[];
  handleReorder: (newLinks: Platform[]) => void;
}

const PlatformsList = ({ platforms, handleReorder }: Props) => {
  const containerRef = useRef(null);
  return (
    <Reorder.Group
      values={platforms}
      onReorder={handleReorder}
      className="list-none p-0"
      dragConstraints={{ top: 0, bottom: 0 }}
      ref={containerRef}
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
            constraintsRef={containerRef}
          ></PlatformEditorItem>
        ))}
      </div>
    </Reorder.Group>
  );
};

export default PlatformsList;
