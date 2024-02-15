import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function FirstLatterUpperCase(name : string | undefined) : string {
  return `${name && name[0].toUpperCase()}${name?.slice(1 , name.length )}`
}