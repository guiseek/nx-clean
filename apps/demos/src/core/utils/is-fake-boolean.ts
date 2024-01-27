export function isFakeBoolean<T extends string | number | boolean>(
  value: T | 'true' | 'false'
) {
  return value === 'true' || value === 'false';
}
