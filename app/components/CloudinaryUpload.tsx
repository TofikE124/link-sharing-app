import { CldUploadWidget } from "next-cloudinary";
import React from "react";
import ImageUpload from "./ImageUpload";

interface Props {
  onUpload?: (url: string) => void;
}

const CloudinaryUpload = ({ onUpload }: Props) => {
  const handleSuccess = (result: any, close: () => void) => {
    console.log(result.info.url);
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
      }}
    >
      {({ open }) => <ImageUpload onClick={() => open()}></ImageUpload>}
    </CldUploadWidget>
  );
};

export default CloudinaryUpload;
