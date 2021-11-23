import * as React from "react";

function SvgInterface(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M25 11.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM28.75 11.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM32.5 11.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
        fill="red"
        fillOpacity={0.5}
      />
      <path
        d="M35 5H5a2.503 2.503 0 00-2.5 2.5v25A2.503 2.503 0 005 35h30a2.503 2.503 0 002.5-2.5v-25A2.503 2.503 0 0035 5zm0 2.5v5H5v-5h30zM5 15h7.5v17.5H5V15zm10 17.5V15h20v17.5H15z"
        fill="red"
        fillOpacity={0.5}
      />
    </svg>
  );
}

export default SvgInterface;
