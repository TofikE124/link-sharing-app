import MenuDropdown from "./components/Menu/MenuDropdown";
import MenuList from "./components/Menu/MenuList";
import PreviewLink from "./components/PreviewLink";
import Tab from "./components/Tab";
import TextField from "./components/TextField";
import { Link, LinkType } from "./constants/links";

export default function Home() {
  return (
    <>
      {/* <TextField placeholder="placeholder"></TextField>
      <button className="button-primary">123</button>
      <button className="button-secondary">123</button>
      <Tab>123</Tab>
      <Tab active={true}>123</Tab>
      {Object.values(LinkType).map((value) => (
        <PreviewLink linkType={value as LinkType}></PreviewLink>
      ))} */}
      <MenuDropdown></MenuDropdown>
    </>
  );
}
