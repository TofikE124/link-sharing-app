import { CldUploadWidget } from "next-cloudinary";
import React from "react";
import ImageUpload from "./ImageUpload";

interface Props {
  onUpload?: (url: string) => void;
  imageURL?: string;
}

const CloudinaryUpload = ({ onUpload = () => {}, imageURL }: Props) => {
  const handleSuccess = (result: any, close: () => void) => {
    onUpload(result.info.url || "");
    close();
  };

  return (
    <CldUploadWidget
      uploadPreset="nb8yvgw3"
      onSuccess={(results, { close }) => {
        handleSuccess(results, close);
      }}
      options={{
        sources: [
          "local",
          "url",
          "image_search",
          "instagram",
          "shutterstock",
          "istock",
          "unsplash",
          "camera",
        ],
        multiple: false,
        cropping: true,
        maxImageWidth: 1024,
        maxImageHeight: 1024,
        clientAllowedFormats: ["png", "jpg"],
      }}
    >
      {({ open }) => (
        <ImageUpload onClick={() => open()} imageURL={imageURL}></ImageUpload>
      )}
    </CldUploadWidget>
  );
};

export default CloudinaryUpload;
