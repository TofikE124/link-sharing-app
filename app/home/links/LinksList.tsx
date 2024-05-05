import { Link } from "@/app/constants/links";
import { Reorder } from "framer-motion";
import LinkEditorItem from "./LinkEditorItem";

interface Props {
  links: Link[];
  handleReorder: (newLinks: Link[]) => void;
}

const LinksList = ({ links, handleReorder }: Props) => {
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
          <LinkEditorItem
            link={link}
            index={index}
            key={link.id}
          ></LinkEditorItem>
        ))}
      </div>
    </Reorder.Group>
  );
};

export default LinksList;
