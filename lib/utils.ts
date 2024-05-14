import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combine class names with Tailwind CSS.
 * @param inputs - Class names to combine.
 * @returns Combined class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Get a random user avatar image.
 * @param seed - Seed for the random image.
 * @returns Random user avatar image.
 */
export function getUserAvatarImage(seed: string | number): string {
  return `https://i.pravatar.cc/150?u=${seed}`;
}

/**
 * Capitalize the first letter of a string.
 * @returns A capitalized string.
 */
export function capitalize(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}

/**
 * Get the link to a post's profile.
 * @param postId - ID of the post.
 * @returns Link to the post's profile.
 */
export function getPostLink(postId: number): string {
  return `/posts/${postId}`;
}

/**
 * Get the link to a user's profile.
 * @param userId - ID of the user.
 * @returns Link to the user's profile.
 */
export function getUserLink(userId: number): string {
  return `/users/${userId}`;
}
