"use client";

import toast from "react-hot-toast";

interface Props {
  link: string;
}

const ShareLinkButton = ({ link }: Props) => {
  const handleClick = () => {
    navigator.clipboard.writeText(link);
    toast.success("Link Copied");
  };
  return (
    <button className="button-primary w-fit" onClick={handleClick}>
      Share Link
    </button>
  );
};

export default ShareLinkButton;
