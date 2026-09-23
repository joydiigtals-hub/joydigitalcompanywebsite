"use client";

import React from "react";
import Link from "next/link";

interface TrackedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  eventName: string;
  location?: string;
  isExternal?: boolean;
}

export default function TrackedLink({ href, eventName, location = "homepage", isExternal = false, className, children, ...props }: TrackedLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (typeof window !== "undefined") {
      const tracker = (window as any).trackJoyDigitalEvent;
      if (typeof tracker === "function") {
        tracker("cta_click", { button_text: eventName, location });
      }
    }
    if (props.onClick) props.onClick(e);
  };

  if (isExternal || href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} onClick={handleClick} className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </Link>
  );
}
