import { Reorder, useDragControls } from "framer-motion";
import LinkEditor from "./LinkEditor";
import { Link } from "@/app/constants/links";

interface Props {
  link: Link;
  index: number;
}

const LinkEditorItem = ({ link, index }: Props) => {
  const controls = useDragControls();
  return (
    <Reorder.Item
      value={link}
      key={link.id}
      dragListener={false}
      dragControls={controls}
    >
      <LinkEditor
        controls={controls}
        link={link}
        index={index}
        key={link.id}
      ></LinkEditor>
    </Reorder.Item>
  );
};

export default LinkEditorItem;
