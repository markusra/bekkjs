import Bekkact from "@marauh/bekkact";

type PackageProps = {
  isOpen: boolean;
};

export const Package = (props: PackageProps) => {
  return (
    <svg
      viewBox="0 20 30 65"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
    >
      <g transform="translate(2.13 42.06)">
        <path d="m1.38.59 23.65.88.62.65L.07 1.1 1.38.59Z" fill="#0B5742" />
        <g transform="translate(3.8 .3)">
          <circle r="9.19" transform="translate(9.2 9.2)" fill="#303030" />
          <path
            d="M8.48 9.76V9.3H6.77V7.59h-.45v1.72H4.59v.45h1.73v1.72h.45V9.76h1.71Zm3.49 2.28V5.25h-.49l-1.23 1.06v.58l1.23-1.08v6.23h.49Z"
            fill="#FFF"
          />
        </g>
        <path
          d="M.15 1.1v18.27c0 .47.38.85.85.85h23.8c.47 0 .85-.38.85-.85V2.07L.15 1.08Z"
          clipRule="evenodd"
          fill="#6D9A8E"
          fillRule="evenodd"
        />
        <path
          d="M11.22 1.51V20.3h3.37l.06-18.65-3.43-.13Z"
          clipRule="evenodd"
          fill="#D78586"
          fillRule="evenodd"
        />
        <rect
          width="25.73"
          height="3.37"
          rx="0"
          ry="0"
          transform="translate(0 8.34)"
          fill="#D78586"
        />
      </g>
    </svg>
  );
};
