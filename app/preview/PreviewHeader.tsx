import Link from "next/link";
import React from "react";

interface Props {
  returnURL: string;
}

const PreviewHeader = ({ returnURL }: Props) => {
  return (
    <div className="sm:bg-transparent bg-purple p-6 h-[350px] rounded-b-[32px]">
      <div className="sm:bg-transparent bg-pure-white py-4 px-5 rounded-xl flex items-center lgmd:justify-between sm:justify-center sm:gap-4">
        <Link href={returnURL} className="button-secondary w-fit no-underline">
          Back to Editor
        </Link>
        <button className="button-primary w-fit">Share Link</button>
      </div>
    </div>
  );
};

export default PreviewHeader;
