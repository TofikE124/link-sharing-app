import { Platform } from "@/app/constants/platforms";
import { Reorder } from "framer-motion";
import PlatformEditorItem from "./PlatformEditorItem";

interface Props {
  links: Platform[];
  handleReorder: (newLinks: Platform[]) => void;
}

const PlatformsList = ({ links, handleReorder }: Props) => {
  return (
    <Reorder.Group
      values={links}
      onReorder={handleReorder}
      className="list-none p-0"
    >
      <div
        className="mt-6 flex flex-col gap-6
    "
      >
        {links.map((link, index) => (
          <PlatformEditorItem
            link={link}
            index={index}
            key={link.id}
          ></PlatformEditorItem>
        ))}
      </div>
    </Reorder.Group>
  );
};

export default PlatformsList;
