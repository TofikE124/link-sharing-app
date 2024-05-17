import { useContext } from "react";
import PreviewHeader from "../PreviewHeader";
import PreviewProfile from "../PreviewProfile";
import ViewHeader from "./ViewHeader";
import ViewProfileContextProvider, {
  ViewProfileContext,
} from "./ViewProfileContextProvider";
import ProfileIncomplete from "../ProfileIncomplete";

interface Props {
  params: { uniqueLinkId: string };
}

const page = ({ params: { uniqueLinkId } }: Props) => {
  return (
    <div>
      <ViewProfileContextProvider uniqueLinkId={uniqueLinkId}>
        <ViewHeader></ViewHeader>
        <PreviewProfile></PreviewProfile>
      </ViewProfileContextProvider>
    </div>
  );
};

export default page;
