import * as React from "react";

export function TelegramIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M21.944 4.382a1.25 1.25 0 0 0-1.32-.196L3.31 11.213a1.25 1.25 0 0 0 .07 2.319l4.214 1.36 1.625 5.226a1.25 1.25 0 0 0 2.045.5l2.5-2.299 4.296 3.157a1.25 1.25 0 0 0 1.97-.79l3.25-15.0a1.25 1.25 0 0 0-.336-1.304ZM9.62 14.74l8.78-7.06-6.43 8.18-2.35-1.12Zm.78 4.05-.7-2.25 1.62.78-.92 1.47Z" />
    </svg>
  );
}
