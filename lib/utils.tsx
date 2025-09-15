import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { v4 as uuidv4 } from "uuid"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "Jenv",
  url: "https://www.jenv.tech",
  ogImage: "https://www.jenv.tech/og.jpg",
  description:
    "Agencies love endless calls, bloated decks, and six-month timelines. We don’t. JENV builds and ships real products in weeks so your users can break them, not your budget.",
  links: {
    twitter: "https://twitter.com/naymur_dev",
    linkedin: "https://www.linkedin.com/in/naymur-rahman",
    github: "https://github.com/naymurdev",
  },
};


export function throttle(fn: (...args: any[]) => any, wait: number) {
  let shouldWait = false;

  return function throttledFunction(this: any, ...args: any[]) {
    if (!shouldWait) {
      fn.apply(this, args);
      shouldWait = true;
      setTimeout(() => (shouldWait = false), wait);
    }
  };
}