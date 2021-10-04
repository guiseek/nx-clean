/**
 * Concatena template strings adicionando
 * values em suas devidas posiçoes
 *
 * @export
 * @param {TemplateStringsArray} strings
 * @param {...unknown[]} values
 * @returns
 */
 export function concatValues(
  strings: TemplateStringsArray,
  ...values: unknown[]
) {
  return strings.map((str, i) => str + (values[i] ?? '')).join('')
}