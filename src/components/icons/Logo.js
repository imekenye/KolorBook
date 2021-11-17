import * as React from "react";

function SvgLogo(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 173 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse
        cx={13}
        cy={12.5}
        rx={13}
        ry={12.5}
        fill="red"
        fillOpacity={0.5}
      />
      <circle cx={33} cy={14} r={13} fill="#FED001" fillOpacity={0.5} />
      <circle cx={22} cy={25} r={11} fill="#3C46B3" fillOpacity={0.5} />
      <path
        d="M66.84 28l-5.808-7.608-1.848 1.968V28H55.92V10.36h3.264v7.896l7.056-7.896h4.104l-7.032 7.752L70.872 28H66.84zm5.395-11.064c1.296-1.248 2.928-1.872 4.896-1.872s3.592.624 4.872 1.872c1.296 1.248 1.944 2.84 1.944 4.776s-.648 3.528-1.944 4.776c-1.28 1.248-2.904 1.872-4.872 1.872s-3.6-.624-4.896-1.872c-1.28-1.248-1.92-2.84-1.92-4.776s.64-3.528 1.92-4.776zm7.464 2.016c-.672-.688-1.528-1.032-2.568-1.032s-1.896.344-2.568 1.032c-.672.688-1.008 1.608-1.008 2.76 0 1.152.336 2.072 1.008 2.76.672.688 1.528 1.032 2.568 1.032s1.896-.344 2.568-1.032c.672-.688 1.008-1.608 1.008-2.76 0-1.152-.336-2.072-1.008-2.76zm6.017-8.592h3.12V28h-3.12V10.36zm6.806 6.576c1.296-1.248 2.928-1.872 4.896-1.872s3.592.624 4.872 1.872c1.296 1.248 1.944 2.84 1.944 4.776s-.648 3.528-1.944 4.776c-1.28 1.248-2.904 1.872-4.872 1.872s-3.6-.624-4.896-1.872c-1.28-1.248-1.92-2.84-1.92-4.776s.64-3.528 1.92-4.776zm7.464 2.016c-.672-.688-1.528-1.032-2.568-1.032s-1.896.344-2.568 1.032c-.672.688-1.008 1.608-1.008 2.76 0 1.152.336 2.072 1.008 2.76.672.688 1.528 1.032 2.568 1.032s1.896-.344 2.568-1.032c.672-.688 1.008-1.608 1.008-2.76 0-1.152-.336-2.072-1.008-2.76zm12.329-3.744c.496 0 .912.064 1.248.192v3.048a5.68 5.68 0 00-1.608-.24c-.912 0-1.632.328-2.16.984-.528.656-.792 1.584-.792 2.784V28h-3.12V15.52h3.12v1.872c.736-1.456 1.84-2.184 3.312-2.184zm13.327 3.504c.816.304 1.488.84 2.016 1.608.528.752.792 1.568.792 2.448 0 1.664-.536 2.952-1.608 3.864-1.056.912-2.536 1.368-4.44 1.368h-7.152V10.36h6.84c1.728 0 3.104.424 4.128 1.272 1.04.832 1.56 2.032 1.56 3.6 0 .704-.2 1.384-.6 2.04-.384.656-.896 1.136-1.536 1.44zm-3.528-5.424h-3.6v4.272h3.48c.832 0 1.464-.184 1.896-.552.432-.368.648-.904.648-1.608 0-.672-.216-1.192-.648-1.56-.432-.368-1.024-.552-1.776-.552zm.36 11.784c.896 0 1.568-.208 2.016-.624.464-.416.696-.992.696-1.728 0-.704-.232-1.264-.696-1.68-.464-.432-1.064-.648-1.8-.648h-4.176v4.68h3.96zm9.232-8.136c1.296-1.248 2.928-1.872 4.896-1.872s3.592.624 4.872 1.872c1.296 1.248 1.944 2.84 1.944 4.776s-.648 3.528-1.944 4.776c-1.28 1.248-2.904 1.872-4.872 1.872s-3.6-.624-4.896-1.872c-1.28-1.248-1.92-2.84-1.92-4.776s.64-3.528 1.92-4.776zm7.464 2.016c-.672-.688-1.528-1.032-2.568-1.032s-1.896.344-2.568 1.032c-.672.688-1.008 1.608-1.008 2.76 0 1.152.336 2.072 1.008 2.76.672.688 1.528 1.032 2.568 1.032s1.896-.344 2.568-1.032c.672-.688 1.008-1.608 1.008-2.76 0-1.152-.336-2.072-1.008-2.76zm7.12-2.016c1.296-1.248 2.928-1.872 4.896-1.872s3.592.624 4.872 1.872c1.296 1.248 1.944 2.84 1.944 4.776s-.648 3.528-1.944 4.776c-1.28 1.248-2.904 1.872-4.872 1.872s-3.6-.624-4.896-1.872c-1.28-1.248-1.92-2.84-1.92-4.776s.64-3.528 1.92-4.776zm7.464 2.016c-.672-.688-1.528-1.032-2.568-1.032s-1.896.344-2.568 1.032c-.672.688-1.008 1.608-1.008 2.76 0 1.152.336 2.072 1.008 2.76.672.688 1.528 1.032 2.568 1.032s1.896-.344 2.568-1.032c.672-.688 1.008-1.608 1.008-2.76 0-1.152-.336-2.072-1.008-2.76zM168.051 28l-3.864-5.16-1.296 1.248V28h-3.12V10.36h3.12v9.744l4.68-4.584h4.176l-5.376 5.208L171.867 28h-3.816z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgLogo;