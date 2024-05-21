import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <svg
        width="33"
        height="33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs />
        <rect
          width="26.172"
          height="25.843"
          fill="white"
          rx="2.22"
          ry="2.22"
          x="4.44"
          y="4.578"
        />
        <path
          fill="#633CFF"
          fill-rule="evenodd"
          d="M2.774 31.225c2.443 2.442 6.37 2.442 14.226 2.442 7.857 0 11.785 0 14.225-2.442 2.442-2.438 2.442-6.368 2.442-14.225 0-7.857 0-11.785-2.442-14.226-2.438-2.44-6.368-2.44-14.225-2.44-7.857 0-11.785 0-14.226 2.44-2.44 2.443-2.44 6.37-2.44 14.226 0 7.857 0 11.785 2.44 14.225Zm10.06-19.642A5.416 5.416 0 1 0 18.25 17a1.25 1.25 0 1 1 2.5 0 7.917 7.917 0 1 1-7.916-7.916 1.25 1.25 0 0 1 0 2.5ZM26.584 17a5.417 5.417 0 0 1-5.417 5.417 1.25 1.25 0 0 0 0 2.5A7.917 7.917 0 1 0 13.25 17a1.25 1.25 0 0 0 2.5 0 5.416 5.416 0 1 1 10.834 0Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
