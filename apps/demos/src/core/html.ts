import { concatValues } from './utils/concat-values';

/**
 * Esta função `template literals` por enquanto apenas cria
 * um elemento de template já vinculando seu html a ele, e
 * também posiciona cada variável em seu devido local validando
 * a possibilidade de null ou undefined, substituindo por ''.
 *
 * Aproveitei o nome html, pois utilizando a extensão do LitElement
 * no VSCode permite que escrevamos o html com syntax highlight
 *
 * @export
 * @param {TemplateStringsArray} strings
 * @param {...unknown[]} values
 * @returns {HTMLTemplateElement}
 */
export function html(
  strings: TemplateStringsArray,
  ...values: unknown[]
): HTMLTemplateElement {
  const template = document.createElement('template');

  template.innerHTML = template.innerHTML = concatValues(strings, values);

  return template;
}
