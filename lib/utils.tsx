import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { v4 as uuidv4 } from "uuid"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "Evlogia",
  url: "https://www.evlogia.ai",
  ogImage: "https://www.evlogia.ai/og.jpg",
  description:
    "We are an AI-driven company creating intelligent solutions to empower businesses and individuals, from predictive analytics to automation.",
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