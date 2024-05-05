import React from "react";
import SmallIcon from "./SmallIcon";
import { iconMap, iconType } from "../constants/icons";

interface Props {
  imageURL?: string;
  onClick: () => void;
}

const ImageUpload = ({ imageURL, onClick }: Props) => {
  const type = imageURL ? "change" : "upload";
  const label = type == "change" ? "Change Image" : "+ Upload Image";
  const color = type == "change" ? "#fff" : "#633cff";

  return (
    <div
      onClick={onClick}
      className="image-upload relative overflow-hidden bg-light-purple rounded-xl cursor-pointer w-[190px] h-[190px] flex flex-col items-center justify-center gap-2"
    >
      {type == "change" ? (
        <div className="image-upload-background absolute inset-0">
          <div
            style={{ backgroundImage: `url(${imageURL})` }}
            className="relative image-upload-background-image w-full h-full bg-cover"
          >
            <div className="absolute inset-0 bg-black opacity-50"> </div>
          </div>
        </div>
      ) : null}
      <SmallIcon
        icon={iconMap[iconType.IMAGE_UPLOAD]}
        color={color}
        width={40}
        height={40}
      ></SmallIcon>
      <h3
        className={`${
          type == "change" ? "text-white" : "text-purple"
        } heading-s z-10`}
      >
        {label}
      </h3>
    </div>
  );
};

export default ImageUpload;
