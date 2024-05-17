import { Reorder, useDragControls } from "framer-motion";
import PlatformEditor from "./PlatformEditor";
import { Platform } from "@/app/constants/platforms";
import { RefObject } from "react";

interface Props {
  platform: Platform;
  index: number;
  constraintsRef: RefObject<HTMLDivElement>;
}

const PlatformEditorItem = ({ platform, index, constraintsRef }: Props) => {
  const controls = useDragControls();

  return (
    <Reorder.Item
      value={platform}
      key={platform.id}
      dragListener={false}
      dragControls={controls}
      dragConstraints={constraintsRef}
    >
      <PlatformEditor
        controls={controls}
        platform={platform}
        index={index}
        key={platform.id}
      ></PlatformEditor>
    </Reorder.Item>
  );
};

export default PlatformEditorItem;
