import * as React from "react";

function SvgColorPallette(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.54 5.08A10.61 10.61 0 0011.91 2a10 10 0 10-.05 20 2.58 2.58 0 002.53-1.89 2.52 2.52 0 00-.57-2.28.499.499 0 01.37-.83h1.65A6.15 6.15 0 0022 11.33a8.48 8.48 0 00-2.46-6.25zM15.88 15h-1.65a2.49 2.49 0 00-1.87 4.15.49.49 0 01.12.49c-.05.21-.28.34-.59.36a7.998 7.998 0 01-7.82-9.11A8.1 8.1 0 0111.92 4H12a8.47 8.47 0 016.1 2.48 6.5 6.5 0 011.9 4.77A4.17 4.17 0 0115.88 15z"
        fill="#fff"
      />
      <path
        d="M12 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM15.25 7.2a1.5 1.5 0 101.5 2.597 1.5 1.5 0 00-1.5-2.597zm-6.5 0a1.5 1.5 0 10-1.498 2.6A1.5 1.5 0 008.75 7.2zm-2.59 4.06a1.5 1.5 0 101.665-.013 1.49 1.49 0 00-1.665.013z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgColorPallette;
