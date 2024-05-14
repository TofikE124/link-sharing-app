import { Reorder, useDragControls } from "framer-motion";
import PlatformEditor from "./PlatformEditor";
import { Platform } from "@/app/constants/platforms";

interface Props {
  platform: Platform;
  index: number;
}

const PlatformEditorItem = ({ platform, index }: Props) => {
  const controls = useDragControls();
  return (
    <Reorder.Item
      value={platform}
      key={platform.id}
      dragListener={false}
      dragControls={controls}
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
