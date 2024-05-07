import { Reorder, useDragControls } from "framer-motion";
import PlatformEditor from "./PlatformEditor";
import { Platform } from "@/app/constants/platforms";

interface Props {
  link: Platform;
  index: number;
}

const PlatformEditorItem = ({ link, index }: Props) => {
  const controls = useDragControls();
  return (
    <Reorder.Item
      value={link}
      key={link.id}
      dragListener={false}
      dragControls={controls}
    >
      <PlatformEditor
        controls={controls}
        link={link}
        index={index}
        key={link.id}
      ></PlatformEditor>
    </Reorder.Item>
  );
};

export default PlatformEditorItem;
