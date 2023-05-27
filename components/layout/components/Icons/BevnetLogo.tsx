import * as React from 'react';

function BevnetLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 99.77"
      width={props.width || 120}
      {...props}
    >
      <path d="M500 20.02h-26.11v79.75h-29.62V20.02h-25.69V0H500v20.02zM82.69 71.45c0 7.79-2.09 14.6-7.83 20.42-5.74 5.81-12.46 7.9-20.13 7.9H0V0h54.72c7.74 0 14.48 2.09 20.19 7.88 5.71 5.78 7.78 12.61 7.78 20.45 0 7.72-2.54 15.18-7.61 20.76 5.07 5.65 7.61 12.07 7.61 19.26v3.1zM53.07 29.72c0-2.6-.79-5.03-2.69-6.96-1.9-1.93-4.28-2.73-6.83-2.73H29.63v20h13.92c2.68 0 5.1-.87 6.92-2.93 1.84-2.08 2.6-4.65 2.6-7.38zm0 39.89c0-2.56-.79-4.96-2.69-6.86-1.9-1.9-4.28-2.71-6.83-2.71H29.63v19.74h13.92c2.68 0 5.1-.86 6.92-2.91 1.84-2.03 2.6-4.56 2.6-7.26zM227.41 0c-7.65 0-10.52 6.53-11.37 10.29-1.09 4.84-10.42 44.48-10.62 45.31-.19-.82-9.52-40.47-10.62-45.31C193.97 6.53 191.1 0 183.45 0H162.6l28.69 99.77h28.26L248.26 0h-20.85zM159.4 20.07V0h-57.45c-8.68 0-15.71 7.03-15.71 15.71v68.3c0 8.68 7.03 15.71 15.71 15.71h6.68c.15.01.29.05.44.05h50.33V79.71h-43.54V60.04h41.96V40.02h-41.96V20.07h43.54zM413.62 20.07V0h-57.45c-8.68 0-15.71 7.03-15.71 15.71v68.3c0 8.68 7.03 15.71 15.71 15.71h6.68c.15.01.29.05.44.05h50.33V79.71h-43.54V60.04h41.96V40.02h-41.96V20.07h43.54zM306.38 0v54.73c-4.39-8.92-22.27-45.32-23.24-47.37-1.42-3.02-4.88-7.36-12.1-7.36h-19.11v99.77h28.52V47.01s21.09 43.15 22.17 45.46c1.42 3.02 4.44 7.3 12.33 7.3h19.96V0h-28.53z" />
      <g>
        <path d="M491.4 83c5.26 0 8.57 3.68 8.57 8.37 0 4.57-3.32 8.37-8.49 8.37-5.14 0-8.49-3.64-8.49-8.33 0-4.69 3.4-8.41 8.41-8.41zm.08 14.68c3.92 0 6.23-2.67 6.23-6.31 0-3.72-2.35-6.27-6.31-6.27-3.8 0-6.15 2.63-6.15 6.31 0 3.56 2.35 6.27 6.23 6.27zm-.85-5.01v3.03h-2.39v-8.74h3.56c1.98 0 3.15 1.33 3.15 2.83 0 1.21-.69 2.06-1.38 2.39l1.62 3.52h-2.47l-1.25-3.03h-.84zm0-3.68v1.74h.97c.49 0 .89-.36.89-.89s-.4-.85-.89-.85h-.97z" />
      </g>
    </svg>
  );
}

export default BevnetLogo;
