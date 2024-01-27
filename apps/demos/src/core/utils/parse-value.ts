import { isFakeBoolean } from './is-fake-boolean';
import { parse } from 'json5';

export function parseValue<T extends string | number | boolean>(value: T) {
  const tmpValue = isNaN(+value) ? value : +value;

  if (typeof tmpValue === 'number') {
    return tmpValue;
  }
  if (isFakeBoolean(tmpValue)) {
    return value == 'false' ? false : true;
  }

  try {
    return parse(value as string);
  } catch (err) {
    return value;
  }
}
