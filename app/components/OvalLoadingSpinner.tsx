import React from "react";
import { Oval } from "react-loader-spinner";

interface Props {
  width?: number;
  height?: number;
}

const OvalLoadingSpinner = ({ width = 30, height = 30 }: Props) => {
  return (
    <Oval
      visible={true}
      width={width}
      height={height}
      color="#fff"
      ariaLabel="oval-loading"
    />
  );
};

export default OvalLoadingSpinner;
