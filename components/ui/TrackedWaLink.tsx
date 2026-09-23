"use client";

import React from "react";

interface TrackedWaLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  location: string;
}

export default function TrackedWaLink({ href, location, className, children, ...props }: TrackedWaLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (typeof window !== "undefined") {
      const tracker = (window as any).trackJoyDigitalEvent;
      if (typeof tracker === "function") {
        tracker("whatsapp_click", { location });
      }
    }
    if (props.onClick) props.onClick(e);
  };

  return (
    <a href={href} onClick={handleClick} target="_blank" rel="noopener noreferrer" className={className} {...props}>
      {children}
    </a>
  );
}
