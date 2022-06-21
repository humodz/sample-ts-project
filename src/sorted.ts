export function sorted<T>(array: T[]): T[] {
  return [...array].sort((a, b) => +(a > b) - +(a < b));
}
