import * as React from "react";

function SvgPicker(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M32.6 2.4c-2-2-5.2-2-7.2 0L21.8 6l-1.4-1.4c-.8-.8-2-.8-2.8 0L16 6c-.8.8-.8 2 0 2.8l10 10c.8.8 2 .8 2.8 0l1.4-1.4c.8-.8.8-2 0-2.8L29 13.2l3.6-3.6c2-2 2-5.2 0-7.2zM5.8 22C1.4 26.4 4 28.4 0 33.6L1.4 35c5.2-4 7.2-1.4 11.6-5.8L23.2 19 16 11.8 5.8 22z"
        fill="red"
        fillOpacity={0.5}
      />
    </svg>
  );
}

export default SvgPicker;
